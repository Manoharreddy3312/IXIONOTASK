import React from 'react'
import Output from './Components/Output'
import Signup from './Components/Signup'
import signup from './Components/signup.css'
import { Routes,  Route ,  BrowserRouter,UseNavigate} from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path="/"  element={<Signup/>}/>
        <Route  path="/Output"  element={<Output  />}/>
        </Routes>
        </BrowserRouter>

  )
}