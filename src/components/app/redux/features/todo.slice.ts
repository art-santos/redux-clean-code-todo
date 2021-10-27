import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uuid } from 'uuidv4';

interface Iid {
    id: string
}

interface ITodo {
    id: string;
    text: string;
    position: number;
    date: number;
}

interface ITodoState {
    value: ITodo[];
    sections: string[];
}

const todo:[] = [];

const sections = [
    'To Do',
    'In Progress',
    'Done',
];
const initialValue = { value: todo, sections: sections } as ITodoState;

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {

        addTodo: (state, action: any) => {
            const newTodo = {
                id: uuid(),
                text: action.payload.value, 
                position: 1, 
                date: Date.now()
            }
            state.value.push(newTodo);
        },

        incrementPosition: (state, action: PayloadAction<Iid>) => {
            state.value.forEach(todo => {
                if (todo.id === action.payload.id) {
                    if(todo.position <= sections.length-1) {
                        todo.position += 1;
                        todo.date = Date.now();
                    }
                }
            });
        },
        
        decrementPosition: (state, action: PayloadAction<Iid>) => {
            state.value.forEach(todo => {
                if (todo.id === action.payload.id) {
                    if(todo.position >= 2) {
                    todo.position -= 1;
                    todo.date = Date.now();
                    }
                }
            });
        }, 

        deleteTodo: (state, action: PayloadAction<Iid>) => {
            state.value = state.value.filter(todo => todo.id !== action.payload.id);
        },

        completeTodo: (state, action: PayloadAction<Iid>) => {
            state.value.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.position = sections.length;
                    todo.date = Date.now();
                }
            });
        }
    
    }
});


export const { addTodo, incrementPosition, decrementPosition, deleteTodo, completeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;