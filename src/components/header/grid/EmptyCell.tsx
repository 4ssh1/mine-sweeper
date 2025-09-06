import { colors } from "../../Colors";
import type { EmptyCellProps } from "../../../interfaces";

function EmptyCell({ children, onClick, onContextMenu, "data-testid": testId }: EmptyCellProps) {
  const textColor = children !== undefined ? ( colors[children] ?? "text-black" ) : "text-black";

  return (
    <div
      className={`flex items-center justify-center cursor-default size-8 bg-[#d2d0d0] hover:brightness-95 border-2 border-amber-50`}
      style= {{color: textColor} }
      onClick={onClick}
      onContextMenu={onContextMenu}
      data-testid={testId}
    >
      {children !== undefined ? children : ""}
    </div>
  );
}

export default EmptyCell;