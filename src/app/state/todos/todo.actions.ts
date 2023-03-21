import { createAction, props } from "@ngrx/store";


export const addTodo = createAction(
    '[Todo Page] Add Todo',
    props<{ content: string }>()
);

export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{ id: string }>()
);

export const loadTodos = createAction('[Todo Page] Load Todo');

export const loadTodosSuccess = createAction('[Todo Page] Load Todo Success');

export const loadTodosFailure = createAction('[Todo Page] Load Todo Failure');