import BodyMain from "./components/BodyMain"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (

    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/footer' element={<BodyMain />} />
      
    
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
