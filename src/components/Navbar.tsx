import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        <div className="navbar-logo">
          Al Pacino
        </div>

        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>

      </div>
    </nav>
  );
}