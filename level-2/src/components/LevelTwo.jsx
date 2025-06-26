import React, { useState } from "react";
import ClockVideo from "./ClockVideo";
import DigitCodeInput from "./DigitCodeInput";
import CodeChallenge from "./CodeChallenge";
import echoRobot from "../assets/echo-robot.png";
import "../styles/LevelTwo.css";

export default function LevelTwo() {
  const [showCodeInput, setShowCodeInput] = useState(true);
  const [showCodeChallenge, setShowCodeChallenge] = useState(false);
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [fadeTransition, setFadeTransition] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [dialogueText, setDialogueText] = useState("Watch the glowing digits closely. They form a 6-digit code.");

  const handleCodeCorrect = () => {
    setShowCongrats(true);
    setDialogueText("✅ Correct code! Now solve this challenge...");
    setTimeout(() => {
      setFadeTransition(true);
      setShowCongrats(false);
      setTimeout(() => {
        setShowCodeInput(false);
        setShowCodeChallenge(true);
        setFadeTransition(false);
      }, 400);
    }, 1200);
  };

  const handleChallengePass = () => {
    setLevelCompleted(true);
  };

  return (
    <div className="level-two-wrapper red-black-theme">
        
      <div className="top-header">
        <h1 className="game-heading underline">LEVEL TWO</h1>
        <div className="hint-box">ECHO HINTS</div>
      </div>
      <div className="level-two-layout">
        <div className="left-section">
          <div className="clockwork-box">
            <h2 className="panel-title">The Clockwork Loop</h2>
          </div>
          <ClockVideo />
          <div className="robot-hint-container shift-dialogue">
            <img src={echoRobot} alt="Echo Robot" className="robot-img" />
            <div className="robot-dialogue">
              <p>{dialogueText}</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className={`right-panel-content fade-transition ${fadeTransition ? "fade-out" : "fade-in"}`}>
            {showCodeInput && <DigitCodeInput onCorrect={handleCodeCorrect} />}
            {showCodeChallenge && <CodeChallenge onPass={handleChallengePass} levelCompleted={levelCompleted} />}
          </div>
        </div>
      </div>
    </div>
  );
}