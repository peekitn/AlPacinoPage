import "../styles/Gallery.css";

import img1 from "../assets/AlPacinoOscar.jpg";
import img2 from "../assets/AlPacinoHeat.jpg";
import img3 from "../assets/AlPacinoEmmy.jpg";
import img4 from "../assets/AlPacinoCoppola.jpg";
import img5 from "../assets/AlPacinoDeniro.jpg";
import img6 from "../assets/AlPacinoCarlito.jpg";

const images = [img1, img2, img3, img4, img5, img6];

{/* array de sizes */}
const sizes = ["big", "wide", "big", "big", "big", "wide"];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <h2>Galeria</h2>

      <div className="gallery-grid">
         {/* map faz com que percorra cada item (img) e a partir dai cria um bloco para cada img, aplicando tamanhos diferentesss */}
        {images.map((img, index) => (
          <div key={index} className={`gallery-item ${sizes[index]}`}>
            <img src={img} alt={`Al Pacino ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}