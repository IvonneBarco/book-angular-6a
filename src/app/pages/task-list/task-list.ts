import { Component } from '@angular/core';
import { ItemTask } from '../../domain/tasks/item-task/item-task';
import { FormTasks } from '../../domain/tasks/form-tasks/form-tasks';

@Component({
  imports: [ItemTask, FormTasks],
  selector: 'app-task-list',
  styleUrl: './task-list.scss',
  templateUrl: './task-list.html',
})
export class TaskList {}
