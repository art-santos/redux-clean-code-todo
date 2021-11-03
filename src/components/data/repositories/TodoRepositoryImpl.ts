import { Todo } from "../../domain/entities/Todos";
import TodoRepository from "../../domain/repositories/TodoRepository";
import retrieve from "../usecases/retrieve";
/*
  This is a real class that's going to implement repository standard functionalities.
  It's going to be used by the usecases to interact with the data layer.
  It's going to be used by the domain layer to interact with the data layer.
  That's the class who's going to read the data asynchronously, them return the data parsed by JSON.
*/


export default class TodoRepositoryImpl implements TodoRepository {
  async GetAllTodos(): Promise<Todo[]> {
    const res = await retrieve();
    const jsonData = await JSON.parse(res);
    return jsonData;
  }
}
