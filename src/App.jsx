// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar title="El Alijo del Guerrero" />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={"Lista de productos medievales"} />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
