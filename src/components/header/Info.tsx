import { useState } from "react"
import useMouseDown from "../../hooks/useMouseDown"

function RedBox({content}:{content: string | number}){
  return(
    <div className="h-8 w-14 bg-black border-[2.4px] border-red-500 flex items-center justify-center">
        <span className="text-red-500 text-[15px] font-bold">{content}</span>   
    </div>
  )
}

function SelectBox(){
  const options = ["Begineer", "Intermediate", "Expert"]
  const [index, setIndex] = useState<number>(0)

  const onSelect = (ind:number)=> {
    const newIndex = (ind + 1) % 3
    setIndex(newIndex)
  }

  const level = options[index]

  return(
    <p className="border-[1px] border-pink-950 text-cyan-800 font-bold rounded-lg text-center py-1 px-2 w-30 cursor-pointer"
    onClick={()=> onSelect(index)}>
      {level}
    </p>
  )
}

function Reset(){
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown()

  return (
    <button onMouseDown={onMouseDown} onMouseUp={onMouseUp} onClick={onReset}
    className="border-[1px] rounded-xl py-1 px-2 hover:opacity-80 ease-out" type="button">
      Reset { mouseDown ? " 😮" : " 😁"}
    </button>
  )

}

const onReset = ()=>{
  
}

function Info() {
  return (
      <div>
        <div className="pb-5">
          <h2 className="font-bold text-2xl pb-2 text-center">minesweeper</h2>
          <p className="font-semibold text-center">flag: <span className="text-red-500">alt</span> + 
          <span className="text-purple-500"> click</span> </p>
        </div>
        <div className="flex gap-2">
          <RedBox content={1200}/>
          <SelectBox />
          <Reset />
          <RedBox content={56}/>
        </div>
      </div>
  )
}

export default Info
