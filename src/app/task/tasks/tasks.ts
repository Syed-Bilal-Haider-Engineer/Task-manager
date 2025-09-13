import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import TaskType from '../../../types/taskTypes';
import { Card } from "../../shared/card/card";


@Component({
  selector: 'app-tasks',
  imports: [Card,DatePipe],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']  
})
export class Tasks {
  @Input({ required: true }) task!: TaskType;
  @Output() onCompleteTaskMethod = new EventEmitter<string>();

  onDeletTasks(taskId:string){
   this.onCompleteTaskMethod.emit(taskId)
  }
}
