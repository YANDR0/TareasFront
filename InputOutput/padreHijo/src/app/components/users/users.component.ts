import { Component } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UsersDetailsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
