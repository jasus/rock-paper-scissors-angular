import { Button } from './button';
import { GameMessage } from './gameMessage';

export class Game {

    private player: Button;
    private opponent: Button;

    constructor(player: Button, opponent: Button) {
        this.player = player;
        this.opponent = opponent;
    }

    public getGameResult(): string {

        let msg = '';

        if (this.player.getType() === this.opponent.getType()) {
            msg = 'tie';
        } else if (
            this.player.getType() === 'rock' && this.opponent.getType() === 'scissors' ||
            this.player.getType() === 'paper' && this.opponent.getType() === 'rock' ||
            this.player.getType() === 'scissors' && this.opponent.getType() === 'paper'
        ) {
            msg = 'win';
        } else {
            msg = 'lose';
        }

        return msg;
    }

    public getMessages(result: string): GameMessage {
        let historyMessage = '';
        let gameMessage = '';

        if (result === 'win') {
            historyMessage = 'You win';
            gameMessage = 'Congratulations!!! You are the winner.';
        } else if (result === 'tie') {
            historyMessage = 'It\'s a tie';
            gameMessage = 'Ohh, it\'s a tie. Try again!!';
        } else if (result === 'lose') {
            historyMessage = 'You lose';
            gameMessage = 'Upsss... you lose. Try again!!';
        }

        const gameMessages = new GameMessage(historyMessage, gameMessage);

        return gameMessages;
    }

}
