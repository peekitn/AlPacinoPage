{/* APENAS UM COMPONENTE PARA TRABALHAR NO MOVIES.TSX */}
import "../styles/MovieCard.css";

type MovieCardProps = {
  title: string;
  year: number;
  image: string;
};

export default function MovieCard({
  title,
  year,
  image,
}: MovieCardProps) {
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

{/* AAAPENAS UM COMPONENTE PARA TRABALHAR NO MOVIES.TSX */}