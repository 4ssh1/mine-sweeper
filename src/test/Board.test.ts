import { emptyFieldGenerator, CellState, fieldGenerator } from "../helpers/Board";

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
        it('wrong Probability', ()=>{
            const errorTest = "Probability must be between 0 and 1"
            expect(()=>fieldGenerator(1, -1)).toThrow(errorTest)
            expect(()=>fieldGenerator(1, 2)).toThrow(errorTest)
            // calling fieldGenerator directly throws the error before Jest can intercept it, causing crash
        })
        it('smallest possible field without mine;', ()=>{
            expect(fieldGenerator(1,0)).toStrictEqual([[empty]])
        })
        it("smallest possible field with mine", ()=>{
            expect(fieldGenerator(1,1)).toStrictEqual([[bomb]])
        })
        it("2  X 2 with mine", ()=>{
            expect(fieldGenerator(2,1)).toStrictEqual([
                [bomb, bomb],
                [bomb, bomb]
            ])
        })
        it("2  X 2 with 50% probability of having a mine", ()=>{
            // expect(fieldGenerator(2,0.5))
            // .toStrictEqual([
            //     [bomb, bomb],
            //     [empty, empty]
            // ])
            const field = fieldGenerator(2, 0.5)
            const flatField = field.flat()
            console.table(field)
            console.table(flatField)

            const cellsWithBomb = flatField.filter(cell=> cell === bomb)
            const emptyCells = flatField.filter(cell=> cell === 2)

            expect(cellsWithBomb).toHaveLength(2)
            expect(emptyCells).toHaveLength(2)

        })
    })
})

console.log(bomb, hidden)