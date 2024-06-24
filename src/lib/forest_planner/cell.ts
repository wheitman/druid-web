export enum CellType {
    GRASS,
    TREE,
    EGO,
    EGO_AND_TREE
}

export class Cell {
    constructor(public location: Location, public type: CellType) { }
}

export class Location {
    constructor(public x: number, public y: number) {
    }
}