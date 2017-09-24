import {Player} from "./player";

export class Game {
  player1: Player;
  player2: Player;

  constructor (initialAuthority: number = 0, player1Name: string = '', player2Name:string = '') {
    this.player1 = new Player(initialAuthority, player1Name);
    this.player2 = new Player(initialAuthority, player2Name);
  }
}
