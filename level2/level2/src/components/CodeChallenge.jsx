import React, { useState } from "react";
import "../styles/LevelTwo.css";

export default function CodeChallenge({ onPass, levelCompleted, onThreeFails }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const checkAnswer = () => {
    if (input.trim().toUpperCase() === "DKR") {
      setError(false);
      onPass();
    } else {
      setError(true);
      setAttempts((prev) => {
        const newAttempt = prev + 1;
        if (newAttempt === 3 && onThreeFails) {
          onThreeFails();
        }
        return newAttempt;
      });
    }
  };

  return (
    <div className="code-challenge-editor">
      <p className="challenge-instruction">SOLVE THE RIDDLE</p>
      <pre className="code-block">
        {`In the kingdom of balance, gravity is but an illusion.
 One sits alone, untouched, unshared, unsplit.
 Two sit below — loyal, mirroring the burden, echoing in halves.
 Three form the base — a trinity of shadows that catch what falls.
Each tier whispers its own sum, a toll for existing.
 The higher you climb, the simpler the load — but the message grows harder.
Shift them through the lens of the old alphabet keeper.
 From the lone throne to the deepest dust — read in descent.
Only three symbols.
 Only one key.
 The pyramid remembers`}
      </pre>
      <textarea
        className="code-blank"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="fill the logic here"
      />
      <button onClick={checkAnswer} className="submit-button">
        Check
      </button>
      {error && <p className="error-message inside">Incorrect logic. Try again.</p>}
      {levelCompleted && <p className="success-msg inside">Level Unlocked!</p>}
    </div>
  );
}
