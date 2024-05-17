import BodyMain from "./components/BodyMain"
import Footer from "./components/Footer"
import GenerateInvoice from "./components/GenerateInvoice"
import Header from "./components/Header"
import PasswardSetting from "./components/PasswardSetting"
import Home from "./pages/Home"
import Login from "./pages/login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (

    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/footer' element={<PasswardSetting />} />
      <Route path='/home/generateInvoice' element={<GenerateInvoice />} />
      <Route path='/home/generateInvoice/footer' element={<PasswardSetting />} />
      
    
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
