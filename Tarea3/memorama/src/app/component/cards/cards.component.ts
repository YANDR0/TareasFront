import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

export class CardsComponent {

  deck: Card[] = [];
  turn: number = 0;
  flipping: boolean = false;

  constructor() {
    let arr: number[] = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
    let j: number = 0;

    while(arr.length > 0){
      let i = Math.floor(Math.random() * arr.length);
      this.deck.push(new Card(arr[i], j++));
      arr.splice(i, 1);
    }

    this.turn = 0;
    this.flipping = false;

    console.log(this.deck)
  }

  flip(c: Card){
    
    let i = c.index;
    this.deck[i].facing = !this.deck[i].facing
  }

}

class Card {
  id: number;
  index: number;
  back: string;
  front: string;
  facing: boolean;

  constructor(i: number, pos: number){
    this.id = i
    this.index = pos
    this.back = 'https://raw.githubusercontent.com/YANDR0/images/main/assets/back.jpg';
    this.front = `https://raw.githubusercontent.com/YANDR0/images/main/assets/card${i}.png`;
    this.facing = false;
  }

}
