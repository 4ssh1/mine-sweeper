import { emptyFieldGenerator, CellState } from "./BoardTypes";

const {empty, bomb, hidden} = CellState

describe('Field Generator', ()=>{
    describe('Test For Empty Field Generator', ()=>{
        it("2 x 2", ()=>{
            expect(emptyFieldGenerator(2)).toStrictEqual([
                [empty, empty],
                [empty, empty]
            ])
        })
    })
})

console.log(bomb, hidden)