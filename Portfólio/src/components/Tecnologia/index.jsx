import React, { useState, useEffect, useRef } from "react";
import "./techstack.css";

export default function Tecnologia() {
  const techs = [
    { name: "React", color: "#61dafb" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "HTML5", color: "#e34f26" },
    { name: "CSS3", color: "#264de4" },
    { name: "Node.js", color: "#3c873a" },
    { name: "Git", color: "#f1502f" },
  ];

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [locked, setLocked] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (paused || locked) return; 
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % techs.length);
    }, 500);
    return () => clearInterval(interval);
  }, [paused, locked, techs.length]);

  const handleClick = (i) => {
    setActive(i);
    setLocked(true);
    listRef.current?.focus(); 
  };

  const handleBlur = () => {
    setLocked(false); 
  };

  return (
    <section
      className="techstack-section"
      aria-label="Tecnologias usadas neste projeto"
    >
      <h2 className="techstack-title">Tecnologias usadas neste projeto</h2>

      <ul
        ref={listRef}
        tabIndex={0} 
        className="tech-list"
        onMouseEnter={() => setPaused(true)} 
        onMouseLeave={() => setPaused(false)} 
        onBlur={handleBlur}
      >
        {techs.map((t, i) => (
          <li
            key={t.name}
            className={`tech-item ${i === active ? "active" : ""}`}
            style={{
              borderColor: i === active ? t.color : "transparent",
              cursor: "pointer",
            }}
            onClick={() => handleClick(i)}
            aria-current={i === active ? "true" : "false"}
          >
            <div className="tech-badge" style={{ backgroundColor: t.color }}>
              {t.name[0]}
            </div>
            <span className="tech-name">{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
