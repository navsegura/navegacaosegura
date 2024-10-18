// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import MainContent from './components/MainContent/MainContent'
import SignatureCard from './components/SignatureCards/SignatureCard.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <MainContent/>
      <SignatureCard/>
      <Footer/>
    </>
  )
}

export default App
