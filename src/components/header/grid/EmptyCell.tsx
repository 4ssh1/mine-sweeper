import { colors } from "../../Colors"
import type { CellType, EmptyCellProps } from "../../../interfaces"

function EmptyCell({ children, onClick, onContextMenu, 'data-testid': testId, mousedown }: EmptyCellProps) {
  return (
    <div
      className={`flex items-center justify-center cursor-default size-[2vw] bg-[#d2d0d0] hover:brightness-95
       border-[0.6vh] backdrop-blur-sm mt-4 text-${colors[children as CellType] ?? '#000'}
       ${mousedown === false ? "transparent" : "border-y-white border-x-[#9e9e9e]"}`}
      onClick={onClick}
      onContextMenu={onContextMenu}
      data-testid={testId}
    >
      {children}
    </div>
  )
}

export default EmptyCell