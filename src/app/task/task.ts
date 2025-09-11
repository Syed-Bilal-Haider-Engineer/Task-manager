import { Component, Input } from '@angular/core';
import { Tasks } from "./tasks/tasks";
import { DUMMY_TASKS } from '../dummy-task';
import TasKType from '../../types/taskTypes';
@Component({
  selector: 'app-task',
  imports: [Tasks],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  @Input ({required:true}) selectedUserName!: string | null;
  @Input ({required:true}) selectUserID!: string | null;
  tasks:TasKType[] = DUMMY_TASKS;
  get tasksList() {
    return DUMMY_TASKS.filter((task:TasKType) => task.userId === this.selectUserID);
  }
}
