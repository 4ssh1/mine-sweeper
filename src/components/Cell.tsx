import { Bomb, BombFrame, CellState } from "../helpers/Board"
import ClosedCell from "./header/grid/ClosedCell"
import EmptyCell from "./header/grid/EmptyCell"


function Cell({children}: any) {
    switch (children){
        case CellState.empty:
            return <EmptyCell />
        case CellState.bomb:
            return ( 
            <BombFrame>
                <Bomb />
            </BombFrame>
            )
        case CellState.hidden:
            return <ClosedCell />
        default:
            return <ClosedCell />

    }
  
}

export default Cell
