
import './App.css'

import {Routes,Route} from 'react-router-dom'
import CreateShape from './components/CreateShape'
import Home from './components/Home'
function App() {
  
  return <Routes>
     <Route path='/' element={<Home/>}/> 
    <Route path='/createshape' element={<CreateShape/>}/> 
     
  </Routes>
  
}

export default App





