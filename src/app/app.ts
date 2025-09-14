import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import UserType from './user/user.model';
import { TaskComponent } from './task/task.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
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
