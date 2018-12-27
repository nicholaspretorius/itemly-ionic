import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'TodoList',
    templateUrl: './todo-list.component.html'
})

export class TodoList {

    @Input()
    todos: any[];

    @Input()
    showDone: boolean;

    constructor() {}
}
