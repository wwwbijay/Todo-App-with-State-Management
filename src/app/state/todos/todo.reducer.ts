import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/todo/todo.model";
import { addTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo } from "./todo.actions";


export interface TodoState {
    todos: Todo[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialstate: TodoState = {
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
        todos: [...state.todos, { id: Date.now().toString(), content: content }],
    })),
    //Remove the new todo to the Todo array
    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id != id),
    })),
    // Trigger loading the todos
    on(loadTodos, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos: todos,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(loadTodosFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))

);