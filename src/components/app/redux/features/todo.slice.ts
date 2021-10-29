import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl";
import { persist } from "../../../data/usecases/persist";
import { Todo } from "../../../domain/entities/Todos";
import { IButton } from "../../../domain/interfaces/interfaces-atoms";
import { ITodo } from "../../../domain/interfaces/interfaces-todo";
import TodoServiceImpl from "../../../domain/usecases/TodoService";

const todo: ITodo[] = [];

const sections = ["To Do", "In Progress", "Done"];

export const getInitialTodos = createAsyncThunk(
  "posts/getInitialTodos",
  async () => {
    const todoRepository = new TodoRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepository);
    const todos = await todoService.GetAllTodos();

    return todos;
  }
);

const initialValue = { value: todo, sections: sections };

export const TodoSlice = createSlice({
  name: "todo",
  initialState: initialValue,

  reducers: {
    addTodo: (state, { payload }) => {
      // const newTodo = new Todo(payload.value);
      // state.value.push(newTodo);
      // persist(state.value);
      //Bug correction here
      const newTodo = {
        id: 'a',
        text: payload.value, 
        position: 1, 
        date: Date.now()
    }
    state.value.push(newTodo);
    persist(state.value);
    },

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

    deleteTodo: (state, { payload }: PayloadAction<IButton>) => {
      persist(state.value.filter((todo) => todo.id !== payload.id));
      state.value = state.value.filter((todo) => todo.id !== payload.id);
    },

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
