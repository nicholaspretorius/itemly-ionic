import { Component, OnInit } from '@angular/core';
import guid from 'guid';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  protected todos: any[];
  protected showDone = true;

  constructor(private todosService: TodoService) {}

  ngOnInit() {
    this.todos = this.todosService.findAll();
  }

  public onAddTodo(e) {
    if (e.todo) {
      this.todosService.addTodo(e.todo);
    }
  }

  public onToggleDone(e) {
    this.showDone = e;
  }
}
