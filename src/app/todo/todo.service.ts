import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
    private storageInitialised = false;

    constructor(private storage: Storage) { }

    async getTodos() {
        if (!this.storageInitialised) await this.storage.create();

        return (await this.storage.get('todos')) || [];

        console.log('get Todos');

    }

    async saveTodos(todos: Todo[]) {
        // if (!this.storageInitialised) await this.storage.create();
        console.log('save Todos');
        // return this.storage.set('todos', todos);
    }
}