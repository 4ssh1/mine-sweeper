
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
