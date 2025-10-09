import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cabecalho from './components/cabecalho'
import Apresentacao from './components/apresentacao'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecalho /> 
     <Apresentacao/> 
     <Footer/>
  </StrictMode>,
)

