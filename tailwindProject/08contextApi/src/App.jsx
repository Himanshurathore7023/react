import { useState } from 'react'
import UserContextProvider from './assets/context/UserContextProvider'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1 className='text-orange-200'>
      contextApi
    </h1>
    <Login />
    <Profile />
   
    
    </UserContextProvider>
  )
}

export default App;
