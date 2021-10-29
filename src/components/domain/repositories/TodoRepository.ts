import { Todo } from "../entities/Todos";

/*This repository follows clean architecture patterns. Basically it's going to return 
an interface that has the methods that we need to interact with the state.
*/

export default interface TodoRepository {
  GetAllTodos?(): Promise<Todo[]>;
  CreateTodo?(text: string, position: number): any;
}
