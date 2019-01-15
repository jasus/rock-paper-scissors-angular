export class Play {

    private message;
    private date;
    private handPlayer;
    private handRival;

    constructor(message: string, handPlayer: string, handRival: string, date: Date) {
        this.message = message;

        this.handPlayer = handPlayer;
        this.handRival = handRival;

        this.date = date;
    }

    public getMessage(): string {
        return this.message;
    }

    public getHandPlayer(): string {
        return this.handPlayer;
    }

    public getHandRival(): string {
        return this.handRival;
    }

}
