import { Component, computed, EventEmitter, Input, output, Output } from '@angular/core';
import  UserType from './user.model';
import { Card } from "../shared/card/card";
@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: UserType;
  @Input({required:true}) selectUserID!: string
  userSelected = output<string>();
  imagePath = computed(() => this.user.avatar);

  onUserSelect(){
   this.userSelected.emit(this.user.id);
  }
}
