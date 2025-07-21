import type { CellType } from "../../../helpers/Board";
import ClosedCell from "./ClosedCell";
import EmptyCell from "./EmptyCell";
import { Bomb, BombFrame, CellState } from "../../../helpers/Board";

function Grid({ children }: { children: CellType }) {
  switch (children) {
    case CellState.empty :
        return <EmptyCell />
    case CellState.hidden:
      return <ClosedCell />;
    case CellState.bomb:
        return <BombFrame><Bomb /></BombFrame>
    
    default:
      return <ClosedCell />;
  }
}

export default Grid

