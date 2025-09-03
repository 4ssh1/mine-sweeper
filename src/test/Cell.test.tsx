/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import Cell from '../components/Cell'
import { CellState } from '../helpers/Board'
import type { CellType, CoordType } from '../interfaces'

describe('Cell component check', () => {
  const coords: CoordType = [1, 1]

  const cellStates = [
    CellState.hidden,
    CellState.mark,
    CellState.weakMark,
  ]

  cellStates.forEach((cell) => {
    it(`Check prevent default contextMenu for cell type ${CellState[cell]}`, () => {
      const props = {
        coords,
        children: cell,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
        mousedown: false,
        handleMouseDown: jest.fn(),
        handleMouseUp: jest.fn(),
      }
      render(<Cell {...props} />)

      const cellComp = screen.getByTestId(`${cell}_${coords}`)
      screen.debug()
      const isPrevented = fireEvent.contextMenu(cellComp)
      expect(isPrevented).toBe(false)
    })
  })
})

test("Check prevent default contextMenu for cell type undefined", () => {
  const cell:CellType = 11; 
  const coords:CoordType = [1,1];
  const props = {
    coords,
    children: cell,
    onClick: jest.fn(),
    onContextMenu: jest.fn(),
    mousedown: false,
    handleMouseDown: jest.fn(),
    handleMouseUp: jest.fn(),
  };
  render(<Cell {...props} />);
  const cellComp = screen.getByTestId(`${cell}_${coords}`); // Fails here
  const isPrevented = fireEvent.contextMenu(cellComp);
  expect(isPrevented).toBe(false);
});