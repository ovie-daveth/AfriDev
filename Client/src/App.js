import React, { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.scss'


const App = () => {
  const [isAuth, SetisAuth] = useState(false)
  return (
    <>
    <main>
      <BrowserRouter>
      <Routes>
      <Route index  element= {<Home />} />
      <Route exact path="/login" element= {<Login SetisAuth={SetisAuth}/>} />
      <Route exact path="/register" element= {<Register SetisAuth={SetisAuth}/>} />
      
      </Routes>
    </BrowserRouter>
    </main>
    </>
    
  )
}

export default App
