import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-title">Al Pacino</h2>

        <p className="footer-text">
          Uma homenagem à carreira de um dos maiores atores da história do cinema.
        </p>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#movies">Filmes</a>
          <a href="#timeline">Timeline</a>
          <a href="#awards">Conquistas</a>
          <a href="#gallery">Galeria</a>
          <a href="#quiz">Quiz</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} - Projeto feito com React
        </p>

      </div>
    </footer>
  );
}