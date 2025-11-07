import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cabecalho from './components/cabecalho'
import Footer from './components/footer'
import Sobre from './components/sobre'

import Habilidades from './components/Habilidades'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecalho /> 
     <Sobre/>
      <Habilidades/>
     <Footer/>
    
     
  </StrictMode>,
)

