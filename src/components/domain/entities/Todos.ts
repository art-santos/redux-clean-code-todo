import { uuid } from "uuidv4";

//That's a class to define a factory of Todos
//It's going to use V4 for generating id's and date.now() to set the last alteration date
export class Todo {
  id: string;
  text: string;
  position: number;
  date: number;

  constructor(text: string) {
    this.id = uuid();
    this.text = text;
    this.position = 1;
    this.date = Date.now();
  }
}

export class Todos {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }
}
