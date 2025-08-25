import { useState } from "react"
import type { MouseDown, MouseUp } from "../interfaces"

const useMouseDown = (): [
    boolean, MouseDown, MouseUp
] => {
  const [mouseDown, setMouseDown] = useState(false)

  const onMouseDown = ()=> setMouseDown(true)
  const onMouseUp = ()=> setMouseDown(false)

  return [mouseDown, onMouseDown, onMouseUp]
}

export default useMouseDown
