import { Component, computed, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Input({required:true}) id!: string;
  // @Output() userSelected = new EventEmitter();
  userSelected = output<string>();
  imagePath = computed(() => this.avatar);
  onUserSelect(){
   this.userSelected.emit(this.id);
  }
}
