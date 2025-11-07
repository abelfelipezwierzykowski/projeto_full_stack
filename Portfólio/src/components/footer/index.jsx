import React from "react";
import "./Footer.css";
import Button from "../contato";

export default function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-footer-content">
        <p>© {new Date().getFullYear()} Abel Felipe Zwierzykowski — Feito com React + Vite</p>
        <div className="pf-socials">
          <Button />
        
        </div>
      </div>
      
    </footer>
  );
}
