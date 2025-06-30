import React, { useState, useRef } from "react";
import "../styles/LevelTwo.css";

export default function DigitCodeInput({ onCorrect }) {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);

  const correctCode = "429675";

  const handleChange = (value, index) => {
    if (/^\d$/.test(value)) {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);
      setError(false);
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const userCode = digits.join("");
    if (userCode === correctCode) {
      onCorrect();
    } else {
      setError(true);
    }
  };

  return (
    <div className="code-input-box">
      <div className="digit-code-input">
        {digits.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => (inputRefs.current[idx] = el)}
            className="digit-box"
          />
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">Submit</button>
      {error && <p className="error-message">Incorrect code. Try again.</p>}
<div className="riddle-box">
<h4 className="riddle-title">Agent Riddle</h4>
  <p className="riddle-text">
    Time drifts in two directions, yet leaves a single trail. <br />
    The first shadow cast by the backward hour holds your starting step. <br />
    The minute’s fury flashes thrice, in perfect rhythm — do not disturb its dance. <br />
    And as the loop folds in on itself, the final echoes of the hour whisper the last two truths. <br />
    Six sparks. One ignition key. <br />
    Trace their story in order, not motion, but memory.
  </p>
</div>

    </div>
  );
  
}
