import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import UserType from '../types/userTypes';
import { Task } from './task/task';
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
  selectedUserId: string ='';

  get selectedUser() {
    return DUMMY_USERS.find((task: UserType) => task.id === this.selectedUserId)!;
  }

  onSelectedUser(userId: string) {
    this.selectedUserId = userId;
  }
}
