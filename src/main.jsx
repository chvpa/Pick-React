import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import '../src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero />
  </React.StrictMode>,
)
