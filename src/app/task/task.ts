import { Component, Input, signal } from '@angular/core';

import { Tasks } from "./tasks/tasks";
import { NewTask } from "./new-task/new-task";

import { DUMMY_TASKS } from '../dummy-task';
import TaskType, { type  NewTaskData } from '../../types/taskTypes';

@Component({
  selector: 'app-task',
  imports: [Tasks, NewTask],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  @Input({ required: true }) selectedUserName!: string | null;
  @Input({ required: true }) selectedUserId!: string | null;
  tasks = signal<TaskType[]>(DUMMY_TASKS);
  isAddingNewTask = signal(false);

  get onTaskList(){
    return this.tasks().filter(task => task.userId === this.selectedUserId)
  };

  onCompleteTask(taskId: string) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }

  onStartAddTask() {
    this.isAddingNewTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingNewTask.set(false);
  }

  onAddTask(newTask:NewTaskData) {
    
   this.tasks.update(tasks => [...tasks,{
    id:Date.now().toString(36) + Math.random().toString(36).substring(2,6),
    userId:this.selectedUserId || '',
    title:newTask.title,
    summary:newTask.summary,
    dueDate: newTask.date
   }]);

   this.onCancelAddTask()
  }
}
