import type { Field, Coord } from "./Board";



export const incrementNeighbours = (coords: Coord, field: Field): Field=>{
    return field
    console.log(coords)
}

export const getNeighbours = ([x, y]: Coord) : Record<string, [number, number]>=>(
    {
        top: [x - 1, y],
        topRight: [x - 1, y + 1],
        right: [x, y + 1],
        rightBottom: [x + 1, y + 1],
        bottom: [x + 1, y],
        bottomLeft: [x + 1, y - 1],
        left: [x, y - 1],
        leftTop: [x - 1, y - 1]
    }
)

export const isIteminField = ([x, y]: Coord, {length}: Field): boolean=>{
    return x >= 0 && y>=0 && length - x > 0 && length - y > 0
}
