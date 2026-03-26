import { useState } from 'react'
import './App.css'
import Navbar from './components/common/navbar/Navbar'
import Footer from './components/common/footer/Footer'
import Home from './components/pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
