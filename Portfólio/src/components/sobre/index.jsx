import React from 'react';
import './apresentacao.css';
import foto from '../../components/Imagens/foto.jpg'
import Surpresa from '../Surpresa';

export default function Sobre() {
    return (
        <section className="pf-hero">
            <div className="pf-hero-content">
                <div className='foto-container'>
                    <h2>Não hover aqui👇</h2>
                    <Surpresa />
                </div>
                <div className='resto'>
                    <div className="titulo">
                        <h2>Olá, eu sou <span className="highlight">Abel Felipe Zwierzykowski</span></h2>
                    </div>
                    <p>
                        Sou estudante de <strong>Engenharia de Software</strong> e apaixonado por 
                        <strong> tecnologia, cultura e inovação</strong>. Tenho interesse especial por 
                        <strong> desenvolvimento web</strong>, <strong>bancos de dados</strong> e pela integração entre 
                        tecnologia e experiências humanas.
                    </p>
                    <p>
                        Além da área técnica, também sou envolvido com <strong>projetos culturais</strong> e estudo 
                        <strong> idiomas</strong> como polonês e inglês — o que amplia minha visão sobre comunicação, 
                        colaboração e diversidade.
                    </p>
                    <p>
                        Busco constantemente aprender novas ferramentas e aprimorar minhas habilidades para construir 
                        soluções criativas, eficientes e com impacto real. Meu objetivo é unir <strong>engenharia, arte e cultura</strong> 
                        para criar um futuro mais conectado e inspirador.
                    </p>
                    <a href="#projects" className="pf-btn">Ver meus projetos</a>
                </div>
            </div>
        </section>
    );
}
