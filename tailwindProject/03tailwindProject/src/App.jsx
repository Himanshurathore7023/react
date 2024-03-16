import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(4)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed) str += "1234567890"
    if(numberAllowed) str += "!@#$%^&*()+_=-{}[]|"
     for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char);
     }
     setPassword(pass);
    },[setPassword,numberAllowed,charAllowed,length])

   //useRef hook

   const passwordRef=useRef(null)

   useEffect(()=>{
    passwordGenerator();

   },[numberAllowed,charAllowed,length,passwordGenerator])

   const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3);    this is use only when we want 3 value select in clipboard 
    window.navigator.clipboard.writeText(password)
   },[password ])


    
   return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-1 my-8 text-orange-500 bg-slate-600 ">
      <h1 className=''>password Generator</h1>
      <div className="flex overflow-hidden mb-4 rounded-lg p-2 bg-slate-600" >
        <input type="text" 
         value={password}
         placeholder='PASSWORD'
         className="w-full py-1 px-3 outline-none bg-slate-100 rounded-md"
         ref={passwordRef} />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 rounded-lg"
          onClick={copyPasswordToClipboard}>copy</button>
        </div>
        
        <div className="flex gap-x-2  text-sm ">
          <div className="flex items-center gap-x-1">
            <input  type="range" 
             min={4} 
             max={20} 
             className="cursor-pointer " 
             onChange={(e)=>{setLength(e.target.value)}}/>
            <lebal >Length:{length}</lebal> 

            <input type="checkbox"  
              id="charactorInput"
              defaultChecked={charAllowed} 
              onChange={()=>{setCharAllowed(prevCharAllowed => !prevCharAllowed);  // here we write prev.this is only syntex
              }} />
              <label htmlFor="charactorInput">Charactor</label>

              <input type="checkbox"  
              id="NumberInput"
              defaultChecked={numberAllowed} 
              onChange={()=>{setNumberAllowed(prevNuberAllowed => !prevNuberAllowed);
              }} />
              <label htmlFor='NumberInput'>Number</label>

          </div>

        </div>
      </div>
     
    </>
  )
}

export default App
