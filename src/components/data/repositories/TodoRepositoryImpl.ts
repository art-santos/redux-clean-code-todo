import { Todo } from "../../domain/entities/Todos";
import TodoRepository from "../../domain/repositories/TodoRepository";
import retrieve from "../usecases/retrieve";

export default class TodoRepositoryImpl implements TodoRepository {
  async GetAllTodos(): Promise<Todo[]> {
    const res = await retrieve("todo");
    const jsonData = await JSON.parse(res);
    return jsonData;
  }
}
