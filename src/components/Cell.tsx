import { Bomb, BombFrame, CellState, Flag, isActiveCell, TransparentFlag, type CellType, type CoordType } from "../helpers/Board"
import ClosedCell, { type Props } from "./header/grid/ClosedCell"
import EmptyCell from "./header/grid/EmptyCell"


export interface CellProps {
    children?: CellType;
    coords: CoordType;
    onClick: (coords: CoordType)=> void;
    onContextMenu: (coords: CoordType)=> void;
    'data-testid'?: string
}

function Cell({children, coords, ...rest}: CellProps & Props) {
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

    const props = {
        onClick,
        onContextMenu,
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
