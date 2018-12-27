import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HomePage } from './home.page';
import { TodoList } from '../components/TodoList/todo-list.component';
import { TodoItem } from '../components/TodoList/todo-item.component';
import { TodoInput } from '../components/TodoInput/todo-input.component';
import { ShowDone } from '../components/ShowDone/show-done.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TodoList, TodoItem, TodoInput, ShowDone]
})
export class HomePageModule {}
