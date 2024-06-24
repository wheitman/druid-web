import { Location } from "./cell";

export enum Action {
    PLANT,
    MOVE_LEFT,
    MOVE_RIGHT,
    MOVE_UP,
    MOVE_DOWN,
}

export class Agent {
    constructor(public pos: Location, private plantFn: any) {

    }

    act(action: Action) {
        switch (action) {
            case Action.MOVE_UP:
                this.pos.y--;
                break;
            case Action.MOVE_DOWN:
                this.pos.y++;
                break;
            case Action.MOVE_LEFT:
                this.pos.x--;
                break;
            case Action.MOVE_RIGHT:
                this.pos.x++;
                break;
            case Action.PLANT:
                this.plantFn()
        }
    }
}