import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  @Input ({required:true}) selectedUserName!: string | null;
}
