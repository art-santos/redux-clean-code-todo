import { Todo } from "../entities/Todos";

export default interface TodoRepository {
  GetAllTodos?(): Promise<Todo[]>;
  CreateTodo?(text: string): Todo;
}
