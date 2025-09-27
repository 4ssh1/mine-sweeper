import type { FieldType, CoordType, CellType } from "../interfaces";
import { CellState } from "./Board";

export const getNeighbours = ([y, x]: CoordType) : Record<string, [number, number]>=>(
    {
        top: [y - 1, x],
        topRight: [y - 1, x + 1],
        right: [y, x + 1],
        rightBottom: [y + 1, x + 1],
        bottom: [y + 1, x],
        bottomLeft: [y + 1, x - 1],
        left: [y, x - 1],
        leftTop: [y - 1, x - 1]
    }
)

export const isIteminField = ([y, x]: CoordType, {length}: FieldType): boolean=>{
    return x >= 0 && y>=0 && length - x > 0 && length - y > 0
}

export const incrementNeighbours = (coords: CoordType, field: FieldType): FieldType=>{
    const neighbours = getNeighbours(coords)

    for(const neighbour of Object.values(neighbours)){
        if(isIteminField(neighbour, field)){
            const [y, x] = neighbour;
            const cell = field[y][x]
            if(cell  < 8) {
                field[y][x] = (cell + 1) as CellType
            }
        }
    }

    return field
}

export const openCell = (coords: CoordType, playerField: FieldType, field: FieldType): FieldType=>{
    const {bomb, empty, hidden} = CellState
    const [y, x] = coords
    const gameCell = field[y][x]
    if(gameCell === bomb){
        throw new Error("Game Over")
    }

    if(gameCell === empty){
        playerField[y][x] = gameCell

        const neighbours = getNeighbours(coords);

        for(const coords of Object.values(neighbours)){
            if(isIteminField(coords, field)){
                const [y, x] = coords;

                const gameCell = field[y][x];
                const playerCell = playerField[y][x];
                
                if(gameCell === empty && playerCell === hidden){
                    playerField = openCell(coords, playerField, field);
                }

                if(playerCell < bomb){
                    playerField[y][x] = gameCell;
                }
            }
        }
    }
    playerField[y][x] = gameCell
    return playerField
}
