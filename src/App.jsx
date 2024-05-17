import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (

    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/footer' element={<Footer />} />
    
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
