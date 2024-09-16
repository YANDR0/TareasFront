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
  gg: number = 0;
  router: Router;

  constructor(router: Router) {
    this.router = router;
    let arr: number[] = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
    let j: number = 0;

    //Arreglo aleatorio de cartas
    while(arr.length > 0){
      let i = Math.floor(Math.random() * arr.length);
      this.deck.push(new Card(arr[i], j++));
      arr.splice(i, 1);
    }

    this.turn = 0;
    this.gg = 0;
  }

  flip(i: number){

    //Voltear carta
    let c = this.deck[i]; 
    c.facing = !c.facing

    //Verificar si estamos a medio turno
    if(this.last == -1){
      this.last = i;
      return;
    }

    //Variables de cambio de turno
    this.turn++;
    let c2 = this.deck[this.last]
    this.last = -1;

    //Si las cartas son iguales
    if(c2.front == c.front){
      c.pair = true;
      c2.pair = true;
      this.gg++;
      return;
    }

    //Si las cartas son distintas
    setTimeout(() => {
      c.facing = false;
      c2.facing = false;
    }, 1000)

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
  pair: boolean;

  constructor(i: number, pos: number){
    this.index = pos
    this.back = 'https://raw.githubusercontent.com/YANDR0/images/main/assets/back.jpg';
    this.front = `https://raw.githubusercontent.com/YANDR0/images/main/assets/card${i}.png`;
    this.facing = false;
    this.pair = false;
  }

}
