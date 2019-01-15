
export enum Type {
    rock = 0,
    paper = 1,
    scissors = 2
}

export class Button {

    private type: string;

    constructor(type: number) {
        this.type = Type[type];
    }

    public getType(): string {
        return this.type;
    }
}
