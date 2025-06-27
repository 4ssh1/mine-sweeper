import { CellState, type Field } from "../helpers/Board";
import { getNeighbours, incrementNeighbours, isIteminField } from "../helpers/CellManipulation";

const {empty, bomb} = CellState

describe('Check increment neighbours', ()=>{
    describe('simple cases', ()=>{
        it("Field with only one item", ()=>{
            expect(incrementNeighbours([0, 0], [[bomb]])).toStrictEqual([[bomb]])
        })
        it('with one mine', ()=>{
            expect(incrementNeighbours([0, 0], [
                [bomb, empty],
                [empty, empty]
            ])).toStrictEqual([
                [bomb, 1],
                [1, 1]
            ])
        })
        it("with two mines", ()=>{
            expect(incrementNeighbours([0, 0], [
                [bomb, empty],
                [empty, bomb]
            ])).toStrictEqual([
                [bomb, 1],
                [1, bomb]
            ])
        })
    })
    describe("3 x 3 cases", ()=>{
        const field: Field = [
            [empty, empty, empty],
            [empty, bomb, empty],
            [empty, empty, empty]
        ]

        it("with one mine", ()=>{
            expect(incrementNeighbours([1, 1], field)).toStrictEqual([
                [1, 1, 1],
                [1, bomb, 1],
                [1, 1, 1] 
            ])
        })
        it("with two mines", ()=>{
            expect(incrementNeighbours([1, 1],[
                [empty, 1, bomb],
                [empty, bomb, 1],
                [empty, empty, empty]
            ])).toStrictEqual([
                [1, 2, bomb],
                [1, bomb, 2],
                [1, 1, 1] 
            ])
        })
    })
    describe('9 x 9 cases', ()=>{
        it("with 7 mine", ()=>{
            expect(incrementNeighbours([4, 5], [
                [9, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 1, 9, 1],
                [0, 0, 1, 9, 1, 0, 2, 2, 2],
                [0, 0, 1, 1, 1, 0, 1, 9, 1],
                [0, 1, 1, 1, 1, 9, 1, 1, 1],
                [0, 1, 9, 2, 1, 1, 0, 0, 0],
                [0, 1, 1, 2, 9, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ])).toStrictEqual([
                [9, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 1, 9, 1],
                [0, 0, 1, 9, 1, 0, 2, 2, 2],
                [0, 0, 1, 1, 2, 1, 2, 9, 1],
                [0, 1, 1, 1, 2, 9, 2, 1, 1],
                [0, 1, 9, 2, 2, 2, 1, 0, 0],
                [0, 1, 1, 2, 9, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ])
        })
    })

})

describe('The 8 neighours of the co-ordinates', ()=>{
    it("[0, 0]", ()=>{
        expect(getNeighbours([0, 0])).toStrictEqual({
            top: [-1, 0],
            topRight:[-1, 1],
            right: [0, 1],
            rightBottom: [1, 1],
            bottom: [1, 0],
            bottomLeft: [1, -1],
            left:[0, -1],
            leftTop: [-1, -1]
        })
    })
    it("[3 x 3]", ()=>{
        expect(getNeighbours([3, 3])).toStrictEqual({
            top: [2, 3],
            topRight:[2, 4],
            right: [3, 4],
            rightBottom: [4, 4],
            bottom: [4, 3],
            bottomLeft: [4, 2],
            left:[3, 2],
            leftTop: [2, 2]
        })
    })
})

describe("check if item is in field", ()=>{
    describe("simple cases", ()=>{
        it("when y is out of range", ()=>{
            expect(isIteminField([1, 0], [[empty]])).toBe(false)
        })
        it("when x is out of range", ()=>{
            expect(isIteminField([0, -1], [[bomb]])).toBe(false)
        })
        it("In range of x and y", ()=>{
            expect(isIteminField([0,0], [[empty]])).toBe(true)
        })
    })

    describe("a 5 x 5 matrix example", ()=>{
        const field: Field = [
            [empty, empty, empty, empty, empty],
            [empty, empty, empty, empty, empty],
            [empty, empty, empty, empty, empty],
            [empty, empty, empty, empty, empty],
            [empty, empty, empty, empty, empty]
        ]
        it("Out of x range", ()=>{
            expect(isIteminField([5, 0], field)).toBe(false)
        })
        it("Out of x range", ()=>{
            expect(isIteminField([-1, 3], field)).toBe(false)
        })
        it("out of y range", ()=>{
            expect(isIteminField([0, 5], field)).toBe(false)
        })
        it("In range", ()=>{
            expect(isIteminField([2, 4], field)).toBe(true)
        }) 
    })
})


