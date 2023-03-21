import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/todo/todo.model";
import { addTodo } from "./todo.actions";


export interface todoState {
    todos: Todo[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialstate: todoState = {
    todos: [],
    error: '',
    status: 'pending'
}

export const todoReducer = createReducer(
    //suply the initial state
    initialstate,
    //Add the new todo to the Todo array
    on(addTodo, (state, { content }) => ({
        ...state,
        todos: [...state.todos, { id: Date.now().toString(), content: content }]
    })),
    //Remove the new todo to the Todo array
    on(addTodo, (state, { content }) => ({
        ...state,
        todos: [...state.todos, { id: Date.now().toString(), content: content }]
    })),
);