import { CellState } from "../helpers/Board";
import { incrementNeighbours } from "../helpers/CellManipulation";

const {empty, bomb} = CellState

describe('Check increment neighbours', ()=>{
    describe('simple cases', ()=>{
        it("Field with only one item", ()=>{
            expect(incrementNeighbours([0, 0], [[bomb]])).toStrictEqual([[bomb]])
        })
    })
})

console.log(empty)