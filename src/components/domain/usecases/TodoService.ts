import { Todo } from '../entities/Todos'
import TodoRepository from '../repositories/TodoRepository'


export default class TodoServiceImpl {
    todoRepository: TodoRepository

    constructor(todoRepository: TodoRepository) {
        this.todoRepository = todoRepository
    }

    GetAllTodos(): Promise<Todo[]> {
        return this.todoRepository.GetAllTodos()
    }
}