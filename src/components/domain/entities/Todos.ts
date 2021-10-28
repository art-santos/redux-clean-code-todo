import { v4 } from "uuid";

export class Todo {
  id: string;
  text: string;
  position: number;
  date: number;

  constructor(text: string) {
    this.id = v4();
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
