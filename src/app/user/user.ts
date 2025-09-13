import { Component, computed, EventEmitter, Input, output, Output } from '@angular/core';
import  UserType from '../../types/userTypes';
import { Card } from "../shared/card/card";
@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) user!: UserType;
  @Input({required:true}) selectUserID!: string
  userSelected = output<string>();
  imagePath = computed(() => this.user.avatar);

  onUserSelect(){
   this.userSelected.emit(this.user.id);
  }
}
