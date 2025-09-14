import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../task.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css'],
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() onClose = new EventEmitter<void>();
  title = '';
  summary = '';
  date = '';

  private taskService = inject(TaskService);

  onCloseHanlde() {
    this.onClose.emit();
  }
    onSubmit() {
      this.taskService.addTask({
        id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
        title: this.title,
        summary: this.summary,
        dueDate: this.date,
        userId: this.userId,
      });
    
      this.title = '';
      this.summary = '';
      this.date = '';
    
      this.onClose.emit();
  }
}
