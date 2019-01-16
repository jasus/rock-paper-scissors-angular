import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button, Type } from 'src/app/classes/button';
import { Game } from 'src/app/classes/game';
import { Play } from 'src/app/classes/play';
import { RockPaperScissorsService } from 'src/app/services/rock-paper-scissors.service';

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

  constructor(private router: Router, private rockPaperScissorsService: RockPaperScissorsService) {
    this.history = [];
  }

  ngOnInit() {
    this.isRemote = this.router.url.includes('remote');
    if(this.isRemote){
      // GET History
      this.getHistory();
    }
  }

  public setShot(shot: number) {
    const player = new Button(shot);
    this.handPlayer = player.getType();

    if (this.isRemote) {
      // GET Rival hand
      this.rockPaperScissorsService.getHand().subscribe(hand => {

        const rival = new Button(hand);

        this.game(player, rival);

      });
    } else {
      const rival = new Button(this.getRandomHand());

      this.game(player, rival);
    }

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

    // Create a play if is remote game
    if(this.isRemote){
      this.rockPaperScissorsService.postPlay(play)
        .subscribe();
    }

  }

  // Get random hand
  private getRandomHand(): number {
    return Math.floor(Math.random() * Object.keys(Type).length / 2);
  }

  private getHistory(){
    this.rockPaperScissorsService.getAllHistory()
      .subscribe(res => {
        this.history = res;
      }, error => {
        console.log(error);
      });
  }

}
