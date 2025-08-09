import { useState } from "react";

const questions = [
  {
    question: "Türkiye’nin başkenti neresidir?",
    choices: ["İstanbul", "Ankara", "İzmir", "Bursa"],
    correctAnswer: "Ankara"
  },
  {
    question: "Dünya’nın en büyük okyanusu hangisidir?",
    choices: ["Atlas Okyanusu", "Hint Okyanusu", "Büyük Okyanus", "Kuzey Buz Denizi"],
    correctAnswer: "Büyük Okyanus"
  },
  {
    question: "Ay’ın Dünya etrafındaki dönüş süresi yaklaşık kaç gündür?",
    choices: ["7", "14", "27", "30"],
    correctAnswer: "27"
  }
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (choice) => {
    if (choice === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bilgi Testi</h1>
      {showScore ? (
        <div>
          <h2>Skorunuz: {score} / {questions.length}</h2>
          <button onClick={handleRestart}>Tekrar Başla</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(choice)}
                style={{
                  display: "block",
                  margin: "8px 0",
                  padding: "8px 12px",
                  cursor: "pointer"
                }}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
