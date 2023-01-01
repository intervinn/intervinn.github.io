import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/sections/Hero'
import Techs from "./components/sections/Techs"
import Footer from './components/sections/Footer'

import "aos/dist/aos.css"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero/>
    <Techs/>
    <Footer/>
  </React.StrictMode>
)
