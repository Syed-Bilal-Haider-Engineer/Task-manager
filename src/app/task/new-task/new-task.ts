import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type NewTaskData} from '../../../types/taskTypes'
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css']
})
export class NewTask {
  @Output() canceled = new EventEmitter<void>();
  @Output() onAdd = new EventEmitter<NewTaskData>()
  title ='';
  summary = '';
  date = '';

  onCancel() {
    this.canceled.emit();
  }

  onSubmit() {
    this.onAdd.emit({
        title: this.title,
        summary: this.summary,
        date: this.date
      });
    }
 }
  
