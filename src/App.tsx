
function App() {

  return (
    <>
      <p className="bg-red-500">My first ty</p>
    </>
  )
}

export default App



// type Name ={
//   name: string
// }& number

// function addNumbers<T extends number>(a:T, b: T): number{
//   return a + b + result
// }
// addNumber<Name>

// addNumbers(1, 2)

// function addNumber<T extends number>(value: T): T{
//   return value
// }

// addNumber(12)

// function showType<T>(value: T){
//   return value 
// }

// const result = showType<number>(12)
// showType<string>("asscdd")

// type MathFun<T = number> = (a: T, b: T) => T

// // the parameters are any if arrow functions are used
// // const addNumber: MathFun<number>= function(a, b) {
// //  return a + b
// // } 
// const add: MathFun<string> = (a: string, b: string): string => a + b;

// console.log(addNumber, add)


// IMPLICIT TYPE ANNOTATION

let name = "Sarah";         // inferred as string
let age = 100;               // inferred as number
let isStudent = true;       // inferred as boolean

console.log(name, age, isStudent)


// EXPLICIT TYPE ANNOTATION

let name2: string = "Sarah";
let age2: number = 20;
let isStudent2: boolean = true;

console.log(name2, age2, isStudent2)

// When to use EXPLICIT TYPE ANNOTATION 
/**
The type isn’t obvious
You want to be more readable/intentional
Working with functions, parameters, return types
When declaring something first, then assigning later
 */

