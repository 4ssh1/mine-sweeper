import { render, screen } from '@testing-library/react'
import Cell from '../components/Cell'
import { CellState, type CoordType } from '../helpers/Board'
// import {isActiveCell}  from '../helpers/Board'

describe('Cell component check', ()=>{

    const coords: CoordType = [1, 1]

    for(let cell = CellState.empty; cell <= CellState.weakMark; cell++){
        it('Check prevent default contextMenu for every cell type', ()=>{
            const props = {
                children: cell,
                coords,
                onClick: jest.fn(),
                onContextMenu: jest.fn(),

            };
            render(<Cell {...props} />);

            const cellComp = screen.getAllByTestId(`${cell}_${coords}`);
        });
        it('onClick and onContextMenu handler should be called for active cells', ()=>{
        })
    }

})

