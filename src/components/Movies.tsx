import MovieCard from "./MovieCard";
import "../styles/Movies.css"
import godfather from "../assets/TheGodfather.jpg";
import godfather2 from "../assets/TheGodfather2.jpg"
import godfather3 from "../assets/TheGodfather3.jpg"
import scarface from "../assets/scarface.jpg";
import heat from "../assets/Heat.jpg"
import deviladvocate from "../assets/DevilAdvocate.jpg"

export default function Movies() {
  return (
    <section id="movies" className="movies-section">
      <h2>Principais Filmes</h2>

      <div className="movies-grid">

        <MovieCard
          title="The Godfather"
          year={1972}
          image={godfather}
        />

        <MovieCard
          title="The Godfather 2"
          year={1974}
          image={godfather2}
        />

        <MovieCard
          title="The Godfather 3"
          year={1990}
          image={godfather3}
        />

        <MovieCard
          title="Scarface"
          year={1983}
          image={scarface}
        />

        <MovieCard
          title="Heat"
          year={1995}
          image={heat}
        />

        <MovieCard
          title="Devil Advocate"
          year={1997}
          image={deviladvocate}
        />
      </div>
    </section>
  );
}