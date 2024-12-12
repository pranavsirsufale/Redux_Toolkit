import { useState } from 'react'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'



function App() {
  const [count, setCount] = useState(0)


  return (

    <>
      <Navbar/>

      <UserDetails/>

      <div>
        <h1> Hi there, It's Pranav sirsufale </h1>
       </div>
    </>
  )
}

export default App
