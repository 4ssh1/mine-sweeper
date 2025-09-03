import { Bomb, BombFrame, CellState, Flag, isActiveCell, TransparentFlag } from "../helpers/Board"
import useMouseDown from "../hooks/useMouseDown";
import ClosedCell from "./header/grid/ClosedCell"
import EmptyCell from "./header/grid/EmptyCell"
import type { CellType, CellProps, Props } from "../interfaces";

function Cell({children, coords, ...rest}: CellProps & Props) {
    const [mousedown, handleMouseDown, handleMouseUp] = useMouseDown()
    const activeCells = isActiveCell(children as CellType)

    const onClick= ()=> {
        if(activeCells){
            rest?.onClick(coords)
        }
    }
    
    const onContextMenu = (elem: React.MouseEvent<HTMLElement>) =>{
        elem.preventDefault()
        
        if(activeCells){
            rest.onContextMenu(coords)
        }
    }

    const onMouseUp = ()=>{
        if(activeCells){
            handleMouseUp()
        }
    }

    const onMouseDown = ()=> {
        if(activeCells){
            handleMouseDown()
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
            return <EmptyCell {...props}/>
        case CellState.bomb:
            return ( 
            <BombFrame {...props}>
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
            return <EmptyCell {...props}>
                {children}
            </EmptyCell>

    }
  
}

export default Cell
