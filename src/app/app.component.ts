import { Component } from '@angular/core';
import {Player} from "./model/player";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  player: Player = new Player(150, 'Yarrick');
  player2: Player = new Player(150, 'Friklauta')
}
