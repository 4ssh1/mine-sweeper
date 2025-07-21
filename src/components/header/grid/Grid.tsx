import type { CellType } from "../../../helpers/Board";
import ClosedCell from "./ClosedCell";
import EmptyCell from "./EmptyCell";

function Grid({ children }: { children: CellType }) {
  switch (children) {
    case 0:
        return <EmptyCell />
    case 10:
      return <ClosedCell />;
    default:
      return <ClosedCell />;
  }
}

export default Grid

