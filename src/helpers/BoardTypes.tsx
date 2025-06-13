export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Field = Cell [][] 
export type Coord = [number, number]

export const CellState: Record<string, Cell> = {
    empty: 0,
    bomb: 9,
    hidden: 10,
    mark: 11,
    weakMark: 12
}

// export const emptyFieldGenerator = (size: number, state: Cell = CellState.empty): Field => [[]]
export const emptyFieldGenerator = (size: number, state: Cell = CellState.empty): Field => 
  Array.from( { length: size }, () => Array.from({ length: size }, () => state) )

  /**
   * For each row, generate a new array of size elements.
     Each element is set to state.
     emptyFieldGenerator(3, 9) // state = 9
     [
        [9, 9, 9],
        [9, 9, 9],
        [9, 9, 9]
     ]
   */

export const fieldGenerator = (size: number, density: number): Field =>{
    if(density < 0 || density > 1){
        throw new Error("Density must be between 0 and 1")
    }

    return Array.from({length: size}, ()=> Array.from({length: size}, ()=> Math.random() < density ? 9 : 0))
}


// export const PossibleCombo: Field = [
//     [9, 1, 0, 0, 0, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1, 0, 1, 9, 1],
//     [0, 0, 1, 9, 1, 0, 2, 2, 2],
//     [0, 0, 1, 1, 1, 0, 1, 9, 1],
//     [0, 1, 1, 1, 1, 9, 1, 1, 1],
//     [0, 1, 9, 2, 1, 2, 2, 3, 2],
//     [0, 1, 1, 2, 9, 2, 9, 9, 9],
//     [0, 0, 0, 1, 1, 4, 9, 8, 9],
//     [0, 0, 0, 0, 0, 1, 9, 9, 9],
// ]