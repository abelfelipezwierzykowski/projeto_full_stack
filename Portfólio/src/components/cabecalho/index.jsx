import React from "react";
import "./cabecalho.css"

export default function Cabecalho() {
  return (
    <header className="principal-header">
      <div className="pf-header-left">
        <h1 className="pf-name">Abel Felipe Zwierzykowski</h1>
        <p className="pf-role">Esrudante de Engenheiraria de Software | Desenvolvedor Web</p>
      </div>

      <nav className="pf-nav" aria-label="Navegação principal">
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}