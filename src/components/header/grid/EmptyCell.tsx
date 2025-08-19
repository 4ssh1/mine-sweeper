import type { CellType } from "../../../helpers/Board"
import { colors } from "../../Colors"
import type { Props } from "./ClosedCell"

interface EmptyCellProps extends Props {
  children?: CellType
  onClick?: () => void
  onContextMenu?: (e: React.MouseEvent<HTMLElement>) => void
  'data-testid'?: string
}

function EmptyCell({ children, onClick, onContextMenu, 'data-testid': testId }: EmptyCellProps) {
  return (
    <div
      className={`flex items-center justify-center cursor-default size-[2vw] bg-[#d2d0d0] hover:brightness-95
       border-[0.6vh] backdrop-blur-sm border-[#dddddd] mt-4 text-${colors[children as CellType] ?? '#000'}`}
      onClick={onClick}
      onContextMenu={onContextMenu}
      data-testid={testId}
    >
      {children}
    </div>
  )
}

export default EmptyCell