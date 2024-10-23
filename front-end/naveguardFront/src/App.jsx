// import { useState } from 'react'

import Router from './routes/routes'
import Home from './pages/Home.jsx'
import './App.css'
import MainContent from './components/MainContent/MainContent'


function App() {

  return (
    <>
      <Router/>
      <MainContent />
      <Home />
    </>
  )
}

export default App
