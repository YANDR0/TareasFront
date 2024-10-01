import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../types/user';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent  {
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {this.users = response, console.log(this.users)},
      error: () => {}
    })   
  }


}
