import React, { useState } from "react";
import "../styles/LevelTwo.css";

export default function CodeChallenge({ onPass, levelCompleted }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const checkAnswer = () => {
    const userCode = `function getSum() { let sum = 0; for(let i = 1; i <= 10; i++) { ${input} } return sum; } getSum();`;
    try {
      const result = eval(userCode);
      if (result === 30) {
        setError(false);
        onPass();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div className="code-challenge-editor">
      <p className="challenge-instruction">
        Fill in the logic to sum even numbers from 1 to 10:
      </p>
      <pre className="code-block">
{`function getSum() {
  let sum = 0;
  for(let i = 1; i <= 10; i++) {
  }
  return sum;
}`}
      </pre>
      <textarea
        className="code-blank"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="fill the logic here"
      />
      <button onClick={checkAnswer} className="submit-button">Check</button>
      {error && <p className="error-message inside">Incorrect logic. Try again.</p>}
      {levelCompleted && <p className="success-msg inside">Level Unlocked!</p>}
    </div>
  );
}