import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persist } from "../../../data/usecases/persist";
import retrieve from "../../../data/usecases/retrieve";
import { IButton } from "../../../domain/interfaces/interfaces-atoms";
import { ITodo } from "../../../domain/interfaces/interfaces-todo";

//this function is going to use the repo implementations to get the data from the database.
export const getInitialTodos = createAsyncThunk(
  "posts/getInitialTodos",
  async () => {
    const todo = await retrieve();

    function trimPosition(value: any) {
      if(typeof value === 'string'){
        if(value == "open"){
          return 1;
        }else{
          return 3;
        }
      }else{
        return value;
      }
    }
    const todos = todo.map((item:any) => typeof item.state === 'string' ? {...item, state: trimPosition(item.state)} : item);

    console.log('stawdwdte-->',todos)
    return todos;
  }
);

const todo: ITodo[] = [];


//If we want to add one more collumn to the sections, just add one item inside it in anywhere.
const sections = ["To Do", "In Progress", "Done"];

//Anyway, if there's nothing in the storage, we can set the initial state to be an empty array.
const initialValue = { value: todo, sections: sections };

//Let's create the reducer now
export const TodoSlice = createSlice({
  name: "todo",
  initialState: initialValue,

  reducers: {
    //So, i've had a bug with serialization in this step. The commented code was the one who wasn't workign properly.
    addTodo: (state, { payload }) => {
      const newTodo = {
        id: 'a',
        title: payload.value, 
        state: 1, 
        date: Date.now()
    }
    state.value.push(newTodo);
    persist(state.value);
    },
    //That's the function associated with the right green button.
    incrementPosition: (state, { payload }: PayloadAction<IButton>) => {
      state.value.forEach((todo) => {
        if (todo.id === payload.id) {
          if (todo.state <= sections.length - 1) {
            todo.state += 1;
            todo.date = Date.now();
          }
        }
      });
      persist(state.value);
    },

    //That's the function associated with the left red button.
    decrementPosition: (state, { payload }: PayloadAction<IButton>) => {
      state.value.forEach((todo) => {
        if (todo.id === payload.id) {
          if (todo.state >= 2) {
            todo.state -= 1;
            todo.date = Date.now();
          }
        }
      });
      persist(state.value);
    },

    //That's the function associated with the delete button.
    deleteTodo: (state, { payload }: PayloadAction<IButton>) => {
      persist(state.value.filter((todo) => todo.id !== payload.id));
      state.value = state.value.filter((todo) => todo.id !== payload.id);
    },

    //That's the function associated with the complete button.
    completeTodo: (state, action: PayloadAction<IButton>) => {
      state.value.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.state = sections.length;
          todo.date = Date.now();
        }
      });
      persist(state.value);
    },
  },
  //Here, we are going to set some cases for dealling with promises. It could have one more state (rejected)
  //but, as the initial data isn't fundamental, i've decided not to implement it.
  extraReducers: (builder) => {
    builder.addCase(getInitialTodos.fulfilled, (state, { payload }: any) => {
      state.value = payload;
    });
  },
});

export const {
  addTodo,
  incrementPosition,
  decrementPosition,
  deleteTodo,
  completeTodo,
} = TodoSlice.actions;

export default TodoSlice.reducer;
