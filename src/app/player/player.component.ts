import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../model/player";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  @Input() player: Player;

  ngOnInit() {
  }

}
