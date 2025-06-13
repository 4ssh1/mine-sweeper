import { emptyFieldGenerator, CellState, fieldGenerator } from "./BoardTypes";

const {empty, bomb, hidden} = CellState

describe('Field Generator', ()=>{
    describe('Test For Empty Field Generator', ()=>{
        it("2 x 2", ()=>{
            expect(emptyFieldGenerator(2)).toStrictEqual([
                [empty, empty],
                [empty, empty]
            ])
        })
        it("3 X 3 hidden state", ()=>{
            expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
                [hidden, hidden, hidden]
            ])
        })
    })
    describe('sample', ()=>{
        it('wrong density', ()=>{
            const errorTest = "Density must be between 0 and 1"
            expect(()=>fieldGenerator(1, -1)).toThrow(errorTest)
            expect(()=>fieldGenerator(1, 2)).toThrow(errorTest)
            // calling fieldGenerator directly throws the error before Jest can intercept it,l causing crash
        })
        it('smallest possible field without mine;', ()=>{
            expect(fieldGenerator(1,0)).toStrictEqual([[empty]])
        })
        it("smallest possible field with mine", ()=>{
            expect(fieldGenerator(1,1)).toStrictEqual([[bomb]])
        })
    })
})

console.log(bomb, hidden)