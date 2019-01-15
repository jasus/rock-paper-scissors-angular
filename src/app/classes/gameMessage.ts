export class GameMessage {

    private historyMessage;
    private gameMessage;

    constructor (historyMessage: string, gameMessage: string) {
        this.historyMessage = historyMessage;
        this.gameMessage = gameMessage;
    }

    public getHistoryMessage(): string {
        return this.historyMessage;
    }

    public getGameMessage(): string {
        return this.gameMessage;
    }

}
