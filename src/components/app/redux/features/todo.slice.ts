import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl";
import { persist } from "../../../data/usecases/persist";
import { IButton } from "../../../domain/interfaces/interfaces-atoms";
import { ITodo } from "../../../domain/interfaces/interfaces-todo";
import TodoServiceImpl from "../../../domain/usecases/TodoService";

//this function is going to use the repo implementations to get the data from the database.
export const getInitialTodos = createAsyncThunk(
  "posts/getInitialTodos",
  async () => {
    //First, let's create a new repo instance.
    const todoRepository = new TodoRepositoryImpl();
    //Then, let's tell the repo which server we are going to implement.repository
    const todoService = new TodoServiceImpl(todoRepository);
    //Finally, let's use the function we want to get the data.
    const todos = await todoService.GetAllTodos();
    //Todos is going to be an array of objects.
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
      // const newTodo = new Todo(payload.value);
      // state.value.push(newTodo);
      // persist(state.value);
      //Bug correction here
    //This one works just fine.
      const newTodo = {
        id: 'a',
        text: payload.value, 
        position: 1, 
        date: Date.now()
    }
    state.value.push(newTodo);
    persist(state.value);
    },
    //That's the function associated with the right green button.
    incrementPosition: (state, { payload }: PayloadAction<IButton>) => {
      state.value.forEach((todo) => {
        if (todo.id === payload.id) {
          if (todo.position <= sections.length - 1) {
            todo.position += 1;
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
          if (todo.position >= 2) {
            todo.position -= 1;
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
          todo.position = sections.length;
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
      state.value = payload || [];
    });
    builder.addCase(getInitialTodos.rejected, (state) => {
      state.value = [];
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
