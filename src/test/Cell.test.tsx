/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import Cell from '../components/Cell'
import { CellState, type CoordType } from '../helpers/Board'

describe('Cell component check', () => {
  const coords: CoordType = [1, 1]

  const cellStates = [
    CellState.empty,
    CellState.bomb,
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
      }
      render(<Cell {...props} />)

      const cellComp = screen.getByTestId(`${cell}_${coords}`)
      const isPrevented = fireEvent.contextMenu(cellComp)
      expect(isPrevented).toBe(false)
    })
  })
})