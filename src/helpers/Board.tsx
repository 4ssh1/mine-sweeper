import type { Props } from "../components/header/grid/ClosedCell"
import { incrementNeighbours } from "./CellManipulation"

export type CellType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type FieldType = CellType [][] 
export type CoordType = [number, number]

export const CellState: Record<string, CellType> = {
    empty: 0,
    bomb: 9,
    hidden: 10,
    mark: 11,
    weakMark: 12
}

// export const emptyFieldGenerator = (size: number, state: Cell = CellState.empty): Field => [[]]
export const emptyFieldGenerator = (size: number, state: CellType = CellState.empty): FieldType => 
  Array.from( { length: size }, () => Array.from({ length: size }, () => state) )

export const fieldGenerator = (size: number, probability: number): FieldType =>{
    if(probability < 0 || probability > 1){
        throw new Error("Probability must be between 0 and 1")
    }

    let noBombCell = size * size
    let bombCells = noBombCell * probability

    const result: FieldType = emptyFieldGenerator(size)

    for(let y = 0; y < size; y++){
      for(let x = 0; x < size; x++){
        if(bombCells === 0){
          return result
        }
        if(bombCells / noBombCell > Math.random()){
          result[y][x] = CellState.bomb
          incrementNeighbours([y, x], result)
          bombCells--
        }
        noBombCell--
      }
    }

    return result
  }


export const BombFrame = ({children}: Props & {children: React.ReactNode})=>{
  return(
    <div className="bg-red-600 flex justify-center items-center size-[2vw]">{children}</div>
  )
}

export const Bomb = ()=>{
  return (
    <div className="rounded-full size-[1.3vw] bg-[#333] flex items-center justify-center "></div>
  )
}

export const Flag = ()=>{
  return (
    <div className="size-0 border-t-[0.5vw] border-t-transparent border-b-[0.5vw] border-b-transparent
    border-l-[0.5vw] border-l-red-600"></div>
  )
}

export const TransparentFlag = ()=>(
  <div className="size-0 border-t-[0.5vw] border-t-transparent border-b-[0.5vw] border-b-transparent
    border-l-[0.5vw] border-l-[#f6aba8de]"></div>
)
  
export const isActiveCell = (cell:CellType): boolean =>
  [CellState.hidden, CellState.mark, CellState.weakMark].includes(cell);


