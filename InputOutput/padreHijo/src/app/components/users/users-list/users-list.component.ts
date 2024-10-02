import { Component, Output, Input, EventEmitter} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../types/user';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent  {

  @Output() selectUserEvent = new EventEmitter();
  @Input() actualUser = -1;
  
  users: User[] = [];
  

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {this.users = response},
      error: () => {}
    })   
  }

  changeSelected(newUser: User){
    this.selectUserEvent.emit(newUser);
    this.actualUser = newUser.id;
  }

}

