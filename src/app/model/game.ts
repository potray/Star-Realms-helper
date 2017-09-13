import {Player} from "./player";

export class Game {
  player1: Player;
  player2: Player;

  constructor (initialAuthority: Number = 0) {
    this.player1 = new Player(initialAuthority);
    this.player2 = new Player(initialAuthority);
  }
}
