import type { Props } from "../../../interfaces"

function ClosedCell({children, ...rest}: Props) {
  return (
    <div {...rest} className="flex items-center justify-center cursor-pointer size-[2vw] bg-[#d1d1d1]
     border-[0.6vh] border-transparent backdrop-blur-sm border-t-[#e2e0e0]
     border-r-[#9e9e9e] border-b-[#9e9e9e] border-l-[#e2e0e0] mt-4 hover:brightness-110">  
     {children}  
    </div>
  )
}

export default ClosedCell
