import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("black")


  return (
    <>
        <div className="w-screen h-screen" style={{backgroundColor:color}}>
          <h1>my first project color changing</h1>
        <div className=" fixed flex flex-wrap  justify-center bottom-12 inset-x-0 ">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button onClick={()=>setColor("red")} 
               className="outline-none px-4 py-1 text-white"
               style={{backgroundColor:"red"}}>red
              </button>
              <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 text-white"
               style={{backgroundColor:"green"}}>green
              </button>
              <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 text-white"
               style={{backgroundColor:"blue"}}>blue
              </button>
              <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 text-black"
               style={{backgroundColor:"yellow"}}>yellow
              </button>
              <button onClick={()=>setColor("grey")} className="outline-none px-4 py-1 text-white"
               style={{backgroundColor:"grey"}}>grey
              </button>
            
            </div>
          </div>
         
         
        </div>
        </>
     
    
  )
}

export default App
