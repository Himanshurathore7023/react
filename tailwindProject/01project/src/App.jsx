import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
   let [counter, setCounter] = useState(0)
   
   const addValue=()=>{
    setCounter(counter+1);
   }
    const removeValue=()=>{
     
     setCounter(counter-1);
     }

  return (
    <>
     <h1 >himanshu rathore</h1>
     <h1 className="bg-black-400">talwind css</h1>
     <h3> counter: {counter} </h3>
     <button onClick={addValue}> value up</button>
     <br />
     <button onClick={removeValue}> value down</button>
     <h3>footer:{counter}</h3>
    </>
  )
}


export default App
