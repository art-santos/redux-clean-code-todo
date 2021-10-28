export interface ITodo {
    id: string;
    text: string;
    position: number;
    date: number;
}

export interface ITodoState {
    value: ITodo[];
    sections: string[];
}