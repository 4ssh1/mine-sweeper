import { useState } from "react"

function RedBox({content}:{content: string | number}){
  return(
    <div className="h-8 w-14 bg-black border-[2.4px] border-red-500 flex items-center justify-center">
        <span className="text-red-500 text-[15px] font-bold">{content}</span>   
    </div>
  )
}

function SelectBox(){
  const options = ["begineer", "intermediate", "expert"]
  return(
    <div className="border-[1px] rounded-full text-center py-1 px-2">
      <select name="" id="" className="outline-none border-0">
        {options.map(option=>(
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}



function Info() {
  const [isReset, setReset] = useState<boolean>(false)

  function reset(){
    setReset(true)
    setTimeout(()=>{
      setReset(false)
    }, 900)
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="pb-5">
          <h2 className="font-bold text-2xl pb-2 text-center">minesweeper</h2>
          <p className="font-semibold text-center">flag: <span className="text-red-500">alt</span> + 
          <span className="text-purple-500"> click</span> </p>
        </div>
        <div className="flex gap-4">
          <RedBox content={1200}/>
          <SelectBox />
          <button className="border-[1px] rounded-xl py-1 px-2 hover:opacity-80 ease-out" type="button">
            Reset <span onClick={reset}> {isReset ? "😮" : "😁"}</span>
          </button>
          <RedBox content={56}/>
        </div>
      </div>
    </div>
  )
}

export default Info
