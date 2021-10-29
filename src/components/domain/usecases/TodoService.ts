import { Todo } from "../entities/Todos";
import TodoRepository from "../repositories/TodoRepository";

/*This is going to be responsible to the flow of the  retrive from store state
  I've added this functionality to show how i deal with data that could be decoupled.
  Doing things this way, i can change the data source without changing the code.
*/

export default class TodoServiceImpl {
  todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
  GetAllTodos(): Promise<Todo[]> | undefined {
    if(this.todoRepository.GetAllTodos) {
    return this.todoRepository.GetAllTodos();
    }
  }
}
