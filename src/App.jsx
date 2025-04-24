import Home from './pages/Home'
import Menu from './pages/Menu'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>


  )
}

export default App
