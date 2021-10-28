import { Todo } from "../entities/Todos";
import TodoRepository from "../repositories/TodoRepository";

export default class TodoServiceImpl {
  todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
  // prettier-ignore
  GetAllTodos(): Promise<Todo[]> | undefined {
    if(this.todoRepository.GetAllTodos) {
    return this.todoRepository.GetAllTodos();
    }
  }
}
