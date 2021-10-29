//An interface for a normal todo

export interface ITodo {
  id: string;
  text: string;
  position: number;
  date: number;
}

//An interface for a gruop of todos

export interface ITodoState {
  value: ITodo[];
  sections: string[];
}
