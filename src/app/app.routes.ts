import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

import { Labs } from './pages/labs/labs'
import { TodoList } from './todo-list/todo-list';
import { TaskList } from './pages/task-list/task-list';
export const routes: Routes = [
  {
    path: '',
    component: TaskList
  },
  {
    path: 'inicio',
    component: Home
  },
  {
    path: 'labs',
    component: Labs
  },
  {
    path: 'todo',
    component: TodoList
  }
];

