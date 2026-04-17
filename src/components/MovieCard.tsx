{/* APENAS UM COMPONENTE PARA TRABALHAR NO MOVIES.TSX */}
import "./MovieCard.css";

export default function MovieCard({ title, year, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />

      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

{/* APENAS UM COMPONENTE PARA TRABALHAR NO MOVIES.TSX */}