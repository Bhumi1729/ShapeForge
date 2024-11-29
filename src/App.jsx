import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import {Routes,Route} from 'react-router-dom'
import CreateShape from './components/CreateShape'
import Home from './components/Home'
function App() {
  
  return <Routes>
     <Route path='/home' element={<Home/>}/> 
    <Route path='/createshape' element={<CreateShape/>}/> 
     
  </Routes>
  
}

export default App





