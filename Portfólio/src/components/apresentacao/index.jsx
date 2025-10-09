import React from 'react';
import './apresentacao.css'
import foto from '../../Imagens/foto.jpg'
export default function Apresentacao() {
    return (
        <section className="pf-hero">
            <div className="pf-hero-content">
                <div className='foto'>
                    <img src={foto} alt="foto" className="foto" />
                </div>
                <div className='resto'>
                    <h2>Olá, eu sou <span className="highlight">Abel Felipe Zwierzykowski</span></h2>
                    <p>Sou estudante de Engenharia de Software e apaixonado por tecnologia, cultura e inovação.</p>
                    <a href="#projects" className="pf-btn">Ver meus projetos</a>
                </div>
            </div>
        </section>
    )
}

