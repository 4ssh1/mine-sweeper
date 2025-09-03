/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import useMouseDown from "../hooks/useMouseDown"; 
import { act } from "react";

describe("useMouseDown Hook test", ()=>{
    it("Should toggle state after onMouseDown / OnMouseUp calls", ()=>{
        const {result} = renderHook(useMouseDown)

        const [mouseDown, onMouseDown, onMouseUp] = result.current

        expect(mouseDown).toBe(false)

        act(onMouseDown)
        expect(result.current[0]).toBe(true)

        act(onMouseUp)
        expect(result.current[0]).toBe(false)
    })
})