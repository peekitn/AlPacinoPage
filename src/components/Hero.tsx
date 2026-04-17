import { useEffect, useState } from "react";
import hero from "../assets/Hero.jpg";
import "./Hero.css";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      
      {/* Background */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Conteúdo */}
      <div className={`hero-content ${visible ? "visible" : ""}`}>
        <h1 className="hero-title">Al Pacino</h1>

        <p className="hero-text">
          "Say hello to my little friend!"
        </p>
      </div>
    </section>
  );
}