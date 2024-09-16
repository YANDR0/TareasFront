import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent {

  deck: Card[] = [];
  turn: number = 0;
  last: number = -1;
  flipping: boolean = false;
  gg: number = 0;
  router: Router;
  

  constructor(router: Router) {
    this.router = router;
    let arr: number[] = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
    let j: number = 0;

    while(arr.length > 0){
      let i = Math.floor(Math.random() * arr.length);
      this.deck.push(new Card(arr[i], j++));
      arr.splice(i, 1);
    }

    this.turn = 0;
    this.flipping = false;
    this.gg = 0;
  }

  flip(i: number){

    let c = this.deck[i]; 
    c.facing = !c.facing

    if(this.flipping){
      this.turn++;
      let c2 = this.deck[this.last]

      if(c2.front != c.front){
        setTimeout(() => {
          c.facing = false;
          c2.facing = false;
        }, 1000)
      } else {
        this.gg++;
      }

      this.last = -1;
    } else {
      this.last = i;
    }

    this.flipping = !this.flipping

  }

  endGame(){
    this.router.navigateByUrl('/retry');
  }

}

class Card {
  index: number;
  back: string;
  front: string;
  facing: boolean;

  constructor(i: number, pos: number){
    this.index = pos
    this.back = 'https://raw.githubusercontent.com/YANDR0/images/main/assets/back.jpg';
    this.front = `https://raw.githubusercontent.com/YANDR0/images/main/assets/card${i}.png`;
    this.facing = false;
  }

}
