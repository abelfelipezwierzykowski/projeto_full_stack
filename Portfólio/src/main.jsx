import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cabecalho from './components/Cabecalho'
import Footer from './components/footer'
import Sobre from './components/sobre'

import Habilidades from './components/Habilidades'
import TechStack from './components/Tecnologia'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecalho /> 
     <Sobre/>
     <TechStack/>
      <Habilidades/>
     <Footer/>
    
     
  </StrictMode>,
)

