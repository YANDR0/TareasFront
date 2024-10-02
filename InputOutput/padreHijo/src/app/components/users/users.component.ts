import { Component } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { User } from '../../types/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UsersDetailsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent {

  actualUser: any = null;
  idUser: number = -1

  getUser(user: User){
    console.log('Received user:', user);
    this.idUser = user.id;
    this.actualUser = user;
  }

  cleanUser(){
    this.idUser = -1;
    this.actualUser = null;
  }

}
