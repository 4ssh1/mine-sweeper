import type { CellType } from "../../../helpers/Board"
import { colors } from "../../Colors"
import type { Props } from "./ClosedCell"

function EmptyCell({children}: Props & { children?: CellType }) {
  return (
    <div className={`flex items-center justify-center cursor-default size-[2vw] bg-[#d2d0d0] hover:brightness-95
     border-[0.6vh]  backdrop-blur-sm border-[#dddddd] mt-4 text-${colors[children as CellType] ?? '#000'} `}>    
    </div>
  )
}

export default EmptyCell
