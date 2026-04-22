import "./Awards.css";
import oscarImg from "../assets/oscar.png";
import baftaImg from "../assets/bafta.png";
import goldenImg from "../assets/GoldenGlobe.png";
import emmyImg from "../assets/Emmy.png";

const awards = [
  {
    title: "Oscar",
    image: oscarImg,
    wins: "1 vitória",
    nominations: "9 indicações",
    description:
      "Venceu o Oscar de Melhor Ator por Scent of a Woman (1993). Também recebeu indicações por clássicos como The Godfather, Serpico e Dog Day Afternoon.",
  },
  {
    title: "BAFTA",
    image: baftaImg,
    wins: "3 vitórias",
    nominations: "5 indicações",
    description:
      "Reconhecido pela academia britânica por performances marcantes, incluindo The Godfather Part II e Dog Day Afternoon.",
  },
  {
    title: "Golden Globes",
    image: goldenImg, 
    wins: "4 vitórias",
    nominations: "18+ indicações",
    description:
      "Recebeu diversos Globos de Ouro ao longo da carreira, com destaque para Scent of a Woman e Angels in America.",
  },
  {
    title: "Emmy",
    image: emmyImg,
    wins: "2 vitórias",
    nominations: "várias indicações",
    description:
      "Premiado por seus trabalhos na televisão, especialmente pela minissérie Angels in America.",
  },
];

export default function Awards() {
  return (
    <section className="awards-section" id="awards">
      <h2>Prêmios & Conquistas</h2>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <img src={award.image} alt={award.title} className="award-icon" />

            <h3>{award.title}</h3>

            <div className="award-stats">
              <span>{award.wins}</span>
              <span>{award.nominations}</span>
            </div>

            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}