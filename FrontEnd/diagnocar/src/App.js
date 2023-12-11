import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'


const App = () => {
  return (
    <BrowserRouter> 

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/Login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App