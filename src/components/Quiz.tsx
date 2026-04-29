import { useState } from "react";
import "../styles/Quiz.css";

{/* lista array de perguntas */}
const questions = [
  {
    question: "Em qual filme Al Pacino interpretou Michael Corleone?",
    options: ["Scarface", "The Godfather", "Heat", "Carlito's Way"],
    answer: "The Godfather",
  },
  {
    question: "Qual prêmio Al Pacino venceu por Scent of a Woman?",
    options: ["Golden Globe", "Oscar", "BAFTA", "Emmy"],
    answer: "Oscar",
  },
  {
    question: "Qual diretor escalou Al Pacino para The Godfather?",
    options: [
      "Martin Scorsese",
      "Steven Spielberg",
      "Francis Ford Coppola",
      "Brian De Palma",
    ],
    answer: "Francis Ford Coppola",
  },
];

{/* Aqui cria o componente */}
export default function Quiz() {
  {/* currentQuestion = question começa ja na primeira pergunta, setCurrentQuestion = assim que for respondido, vai para a próxima*/}
  const [currentQuestion, setCurrentQuestion] = useState(0);
  {/* Conta os acertos */}
  const [score, setScore] = useState(0);
  {/* Confere se o quiz foi encerrado */}
  const [finished, setFinished] = useState(false);

  function handleAnswer(option: string) {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
  }

  return (
    <section className="quiz-section" id="quiz">
      <h2>O quanto você sabe sobre Al Pacino?</h2>

      {!finished ? (
        <div className="quiz-box">
          <h3>{questions[currentQuestion].question}</h3>

          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <h3>Quiz finalizado!</h3>
          <p>
            Você acertou {score} de {questions.length}
          </p>

          <button onClick={restartQuiz}>Tentar novamente</button>
        </div>
      )}
    </section>
  );
}