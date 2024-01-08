import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


function App() {

  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Home />
    </>
  )
}

export default App
