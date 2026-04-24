import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reg from './assets/pages/Reg'
import Log from './assets/pages/Log'
import Udash from './User/Udash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Reg/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/dash' element={<Udash/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
