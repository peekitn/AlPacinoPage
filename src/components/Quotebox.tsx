import "../styles/Quotebox.css";

const words = [
  "Say Hello To My Little Friend.",
  "Just When I Thought I Was Out, They Pull Me Back In.",
  "You're out of order! You're out of order! The whole trial is out of order!",
  "He wants to kill me so bad he can taste it! Huh? ATTICA! ATTICA! ATTICA!",
  "Don’t ever take sides with anyone against the family again. Ever.",
  "You never open your mouth until you know what the shot is.",
  "There are many things my father taught me here in this room. He taught me: keep your friends close, but your enemies closer.",
  "A wise guy's always right; even when he's wrong, he's right.",
];

export default function Quotebox() {
  return (
    <section className="quote-section">
      <div className="quote-track">
        {/* words.concat(words) faz com que crie um novo array duplicado, dai a lista fica duplicada. Já no map(word, index) => (...) map percorre cada item no array e entao para cada frase (word), é criado um elemento na tela. Lembrando que o index é a posição do item no array up*/}
        {words.concat(words).map((word, index) => (
          <span key={index} className="quote-word">
            {word}
          </span>
        ))}
      </div>  
    </section>
  );
}