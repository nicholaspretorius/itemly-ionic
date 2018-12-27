import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'TodoInput',
    templateUrl: './todo-input.component.html'
})

export class TodoInput {

    public todo = '';

    @Output()
    addTodoEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    public addTodo(e) {
        console.log('Submit: ', e);
        this.addTodoEvent.emit({ todo: this.todo });
        this.todo = '';
    }
}
