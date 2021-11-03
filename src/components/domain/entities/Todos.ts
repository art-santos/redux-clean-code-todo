import { uuid } from "uuidv4";

//That's a class to define a factory of Todos
//It's going to use V4 for generating id's and date.now() to set the last alteration date
export class Todo {
  id: string;
  title: string;
  state: number;
  date: number;

  constructor(title: string) {
    this.id = uuid();
    this.title = title;
    this.state = 1;
    this.date = Date.now();
  }
}

export class Todos {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }
}
