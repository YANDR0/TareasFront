import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-retry',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.scss'
})
export class RetryComponent {
  router: Router;

  constructor(router: Router){
    this.router = router;
  }

  newGame(){
    this.router.navigateByUrl('/');
  }
}
