import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo.slice";

//The responsible for the management of all the global redux states
export const store = configureStore({
  reducer: {
    //The reducer is the responsible for the management of all the global redux states
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
