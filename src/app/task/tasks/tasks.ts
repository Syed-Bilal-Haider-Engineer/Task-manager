import { Component, Input } from '@angular/core';
import TaskType from '../../../types/taskTypes';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']  
})
export class Tasks {
  @Input({ required: true }) task!: TaskType;

  ngOnInit() {
    console.log("this.task", this.task); 
  }
}
