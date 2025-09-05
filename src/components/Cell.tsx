import BombFrame, { Bomb, CellState, Flag, isActiveCell, TransparentFlag } from "../helpers/Board";
import useMouseDown from "../hooks/useMouseDown";
import ClosedCell from "./header/grid/ClosedCell";
import EmptyCell from "./header/grid/EmptyCell";
import type { CellType, CellProps } from "../interfaces";

function Cell({ children, coords, onClick, onContextMenu, ...rest }: CellProps) {
  const [mousedown, onMouseDown, onMouseUp] = useMouseDown();

  const handleClick = () => onClick(coords);

  const handleContextMenu = (elem: React.MouseEvent<HTMLElement>) => {
    elem.preventDefault();
    if (isActiveCell(children as CellType)) {
      onContextMenu(coords);
    }
  };

  const nonActive = {
    onContextMenu: handleContextMenu, 
    'data-testid': rest['data-testid'],
  };

  const props = {
    onClick: handleClick,
    onContextMenu: handleContextMenu,
    onMouseDown,
    onMouseUp,
    onMouseLeave: onMouseUp,
    mousedown,
    'data-testid': `${children}_${coords}`,
  };

  switch (children) {
    case CellState.empty:
      return <EmptyCell {...nonActive} />;
    case CellState.bomb:
      return (
        <BombFrame {...nonActive}>
          <Bomb />
        </BombFrame>
      );
    case CellState.hidden:
      return <ClosedCell {...props} />;
    case CellState.mark:
      return (
        <ClosedCell {...props}>
          <Flag />
        </ClosedCell>
      );
    case CellState.weakMark:
      return (
        <ClosedCell {...props}>
          <TransparentFlag />
        </ClosedCell>
      );
    default:
      return <EmptyCell {...nonActive}>{children}</EmptyCell>;
  }
}

export default Cell;