import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import TaskType from '../task.model';
import { Card } from "../../shared/card/card";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  imports: [Card,DatePipe],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']  
})
export class TasksComponent {
  @Input({ required: true }) task!: TaskType;
  private taskService = inject(TaskService);

  onDeletTasks(taskId: string) {
    this.taskService.deleteTask(taskId);
  }  
}
