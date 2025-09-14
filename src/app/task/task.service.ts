import { Injectable, signal } from '@angular/core';
import type Task from './task.model';
import { DUMMY_TASKS } from '../dummy-task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([...DUMMY_TASKS]);

 constructor() {
  const raw = localStorage.getItem("tasks");
  if (raw && raw !== "undefined" && raw !== "null") {
      this.tasks.set(JSON.parse(raw));
    }
}

  getUserTasks(userId: string | null) {
    return this.tasks().filter(task => task.userId === userId);
  }

  addTask(newTask: Task) {
    this.tasks.update(tasks => [...tasks, newTask]);
    this.saveTask()
  }

  deleteTask(taskId: string) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
    this.saveTask()
  }

  private saveTask(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks()));
  }
}
