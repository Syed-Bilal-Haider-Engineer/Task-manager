import { Component, computed, EventEmitter, Input, output, Output } from '@angular/core';
import  UserType from '../../types/userTypes';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) user!: UserType;
  userSelected = output<string>();
  imagePath = computed(() => this.user.avatar);
  onUserSelect(){
   this.userSelected.emit(this.user.id);
  }
}
