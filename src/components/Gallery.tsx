import "../styles/Gallery.css";

import img1 from "../assets/DevilAdvocate.jpg";
import img2 from "../assets/AlPacinoHeat.jpg";
import img3 from "../assets/Scarface.jpg";
import img4 from "../assets/TheGodfather2.jpg";
import img5 from "../assets/TheGodfather3.jpg";
import img6 from "../assets/TheGodfather.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <h2>Galeria</h2>

      <div className="gallery-grid">
         {/* O map(img, index) => (...) map percorre cada item no array e entao para cada imagem (img), é criado um elemento na tela. Lembrando que o index é a posição do item no array */}
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Al Pacino ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}