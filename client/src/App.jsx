import React from 'react'
import { Button } from './components/ui/button'
import { Routes,Route } from 'react-router-dom'
import Login from "./pages/Login"

const App = () => {
  return (
    <div className=''>
     <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Login />} />
     </Routes>
    </div>
      
  )
}

export default App