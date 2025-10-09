import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-footer-content">
        <p>© {new Date().getFullYear()} Abel Felipe Zwierzykowski — Feito com React + Vite</p>
        <div className="pf-socials">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:seu-email@exemplo.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
