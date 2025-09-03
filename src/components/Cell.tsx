import { Bomb, BombFrame, CellState, Flag, isActiveCell, TransparentFlag } from "../helpers/Board"
import useMouseDown from "../hooks/useMouseDown";
import ClosedCell from "./header/grid/ClosedCell"
import EmptyCell from "./header/grid/EmptyCell"
import type { CellType, CellProps, Props } from "../interfaces";

function Cell({children, coords, ...rest}: CellProps & Props) {
    const [mousedown, onMouseDown, onMouseUp] = useMouseDown()
    const nonActive = {
        onContextMenu: rest.onContextMenu,
        'data-testid': rest['data-testid']
    }

    const onClick = ()=> rest.onClick(coords)
    
    const onContextMenu = (elem: React.MouseEvent<HTMLElement>) =>{
        elem.preventDefault()
        
        if(isActiveCell(children as CellType)){
            rest.onContextMenu(coords)
        }
    }

    const props = {
        onClick,
        onContextMenu,
        onMouseDown,
        onMouseUp,
        onMouseLeave: onMouseUp,
        mousedown,
        'data-testid': `${children}_${coords}`
    }

    switch (children){
        case CellState.empty:
            return <EmptyCell {...nonActive}/>
        case CellState.bomb:
            return ( 
            <BombFrame {...nonActive}>
                <Bomb />
            </BombFrame>
            )
        case CellState.hidden:
            return <ClosedCell  {...props}/>
        case CellState.mark:
            return (
                <ClosedCell {...props}>
                    <Flag />
                </ClosedCell>
            )
        case CellState.weakMark:
            return (
                <ClosedCell {...props} >
                    <TransparentFlag />
                </ClosedCell>
            )
        default:
            return <EmptyCell {...nonActive}>
                {children}
            </EmptyCell>

    }
  
}

export default Cell
