import { colors } from "../../Colors";
import type { EmptyCellProps } from "../../../interfaces";

function EmptyCell({ children, onClick, onContextMenu, "data-testid": testId, mousedown = false }: EmptyCellProps) {
  const textColor = children !== undefined ? ( colors[children] ?? "text-black" ) : "text-black";

  const borderClasses = mousedown ? "border-t-white border-b-white border-l-[#9e9e9e] border-r-[#9e9e9e]" : "border-transparent";

  return (
    <div
      className={`flex items-center justify-center cursor-default w-8 h-8 bg-[#d2d0d0] hover:brightness-95 border-2 ${borderClasses} mt-4 ${textColor}`}
      onClick={onClick}
      onContextMenu={onContextMenu}
      data-testid={testId}
    >
      {children !== undefined ? children : ""}
    </div>
  );
}

export default EmptyCell;