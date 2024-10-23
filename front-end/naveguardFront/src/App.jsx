// import { useState } from 'react'
import Router from './routes/routes'
import './App.css'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'


function App() {

  return (
    <>
      <Header />
      <Router/>
      <MainContent />
      {/* <Footer/>
      <SignatureCard/> */}
    </>
  )
}

export default App
