import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Task } from './task/task';
import UserType from '../types/userTypes';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Task],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('task-manager-app');
  users = DUMMY_USERS;
  selectUserID = signal<string | null>(null);
  get selectedUser() {
    return DUMMY_USERS.find((task: UserType) => task.id === this.selectUserID())!;
  }
  onSelectedUser(userId: string) {
    this.selectUserID.set(userId);
  }
}
