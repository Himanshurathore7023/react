import { useState } from 'react'



function App() {
  const [result, setResult] = useState("")
  const handleClick=(e)=>{
    setResult((pre)=> pre.concat(e.target.id))
  }
  const clearAll=()=>setResult("");
  const deleteOne=()=>setResult(result.slice(0,-1));
  const calculate=()=>{
    try{
          setResult(eval(result).toString())
    }
    catch(error){
      setResult("Error")

    }

  } 

  return (
    <div className="bg-white">
      <div className='border p-5 bg-gray-700 w-2/6 m-5 mx-auto rounded-lg '> 
      
        <div>
          <input type='text' 
          value={result}
          disabled
          placeholder='0'
          className="border p-3 w-full rounded-lg shadow-lg shadow-black"/>
        </div >
        <div>
        <h6 className='pt-4 text-slate-950 '>CASIO</h6>
      </div>
        <div class="grid grid-cols-4 gap-2 p-2" >
        <input onClick={clearAll} type="button" value="AC" id=" AC"className="bg-red-500 p-2 rounded-lg col-span-2"/>
          <input  onClick={deleteOne} type="button" value="DEL"  id="DEL" className="bg-red-500 p-2 rounded-lg col-span-2"/>
          <input onClick={handleClick} type="button" value="1" id="1" className="bg-white p-2 rounded-lg " />
          <input onClick={handleClick} type="button" value="2"  id="2" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="3"  id="3" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="%"  id="%" className="bg-yellow-700 p-2 rounded-lg"/>
          <input  onClick={handleClick} type="button" value="4"  id="4" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="5"  id="5" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="6" id="6" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="*" id="*"className="bg-yellow-700 p-2 rounded-lg"/>
          <input  onClick={handleClick} type="button" value="7" id="7" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="8"  id="8" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="9"  id="9" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="/" id="/" className="bg-yellow-700 p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="0" id="0" className="bg-white p-2 rounded-lg"/>
          <input onClick={handleClick} type="button" value="00" id="00" className="bg-white p-2 rounded-lg "/>
          <input onClick={handleClick} type="button" value="+" id="+" className="bg-yellow-700 p-2 rounded-lg "/>
          <input onClick={calculate} type="button" value="="  id="=" className="bg-yellow-700 p-2 rounded-lg "/>
          

        </div>
        
    </div>

    </div>
      
    
  )
}

export default App
