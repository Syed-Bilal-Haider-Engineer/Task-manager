import { Component, inject, Input, signal } from '@angular/core';

import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task";

import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [TasksComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input({ required: true }) selectedUserName!: string | null;
  @Input({ required: true }) selectedUserId!: string;
  isAddingNewTask = signal(false);

  private taskService = inject(TaskService);

   get getUserTasks(){
    const userTask =  this.taskService.getUserTasks(this.selectedUserId);
    return userTask;
  };

  onStartAddTask() {
    this.isAddingNewTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingNewTask.set(false);
  }
}
