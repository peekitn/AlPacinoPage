import { useEffect, useState } from "react";
import hero from "../assets/Hero.jpg";
import "../styles/Hero.css";

export default function Hero() {
  {/* visible comeca como falso*/}
  const [visible, setVisible] = useState(false);

  useEffect(() => {
     {/* assim que o componente aparece na tela, espera 50ms e muda o visible pra true */}
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

      {/* Conteudo */}
      {/* aqui se o visible for true, entao entra a classe visible */}
      <div className={`hero-content ${visible ? "visible" : ""}`}>
        <h1 className="hero-title">Al Pacino</h1>

        <p className="hero-text">
          "Say hello to my little friend!"
        </p>
      </div>
    </section>
  );
}