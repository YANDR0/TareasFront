import { Component, Output, Input, EventEmitter} from '@angular/core';
import { User } from '../../../types/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.scss'
})
export class UsersDetailsComponent {

  @Output() cleanUserEvent = new EventEmitter();
  @Input() dataUser: any = null;


  cleanUser(){
    this.cleanUserEvent.emit();
  }

}
