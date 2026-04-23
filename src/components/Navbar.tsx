import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); {/* scroll */}
  const [menuOpen, setMenuOpen] = useState(false); {/* menu hamburguer */}

  {/* aqui detecta o scroll */}
  useEffect(() => {
    const handleScroll = () => {
       {/* se passou dos 50px, scrolled vira true e posteriormente muda o estilo */}
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
   {/* aqui remove o evento quando o componente sai da tela */}
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        <div className="navbar-logo">
          Al Pacino
        </div>

        {/* botão mobile */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={handleClick}>Home</a></li>
          <li><a href="#movies" onClick={handleClick}>Filmes</a></li>
          <li><a href="#timeline" onClick={handleClick}>Timeline</a></li>
          <li><a href="#awards" onClick={handleClick}>Conquistas</a></li>
          <li><a href="#gallery" onClick={handleClick}>Galeria</a></li>
        </ul>

      </div>
    </nav>
  );
}