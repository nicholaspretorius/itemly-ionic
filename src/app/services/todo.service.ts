import { Injectable } from '@angular/core';
import guid from 'guid';

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    public todos: Array<any> = [
        {
            id: guid.raw(),
            text: 'Learn React',
            done: false
        }, {
            id: guid.raw(),
            text: 'Learn Vue',
            done: false
        }, {
            id: guid.raw(),
            text: 'Learn Angular',
            done: true
        }
    ];

    constructor() {}

    public findAll() {
        return this.todos;
    }

    public addTodo(text) {
        const todo = {
            id: guid.raw(),
            text: text,
            done: false
        };
        this.todos.push(todo);
    }
}
