import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, Type } from 'src/app/classes/button';
import { Game } from 'src/app/classes/game';
import { Play } from 'src/app/classes/play';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  history: Play[];
  handPlayer: string;
  handRival: string;
  gameMessage: string;
  isRemote: boolean;

  constructor(private router: Router) {
    this.history = [];
  }

  ngOnInit() {
    this.isRemote = this.router.url.includes('remote');
  }

  public setShot(shot: number) {
    const player = new Button(shot);
    this.handPlayer = player.getType();

    const rival = new Button(this.getRandomHand());

    this.game(player, rival);

  }

  private game(player: Button, rival: Button) {
    this.handRival = rival.getType();

    const game = new Game(player, rival);

    const result = game.getGameResult();
    const gameMessages = game.getMessages(result);

    this.gameMessage = gameMessages.getGameMessage();

    // Create a play locally and save in history
    const play = new Play(gameMessages.getHistoryMessage(), this.handPlayer, this.handRival, new Date());
    this.history.unshift(play);

  }

  // Get random hand
  private getRandomHand(): number {
    return Math.floor(Math.random() * Object.keys(Type).length / 2);
  }

}
