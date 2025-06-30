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
  const [showHint, setShowHint] = useState(false);

  const defaultText =
    "Welcome to the Clockwork Loop, Agent.Time is folding.Each tick hides a digit.The hour rewinds, the minute sparks chaos.Crack the code before the loop resets.Nemora is listening...";

  const hintText =
    "The throne stands above. The middle bears its echo. The base holds it all. Their totals aren't just numbers — shift them where A begins at 1. Read downward.";

  const [dialogueText, setDialogueText] = useState(defaultText);

  const handleCodeCorrect = () => {
    setShowCongrats(true);
    setDialogueText(
      "Agent, numbers weren't all.Nemora sealed her core in a puzzle where mass means truth.The pyramid lies gravity is gone.See with logic, not eyes.Decode its burden. From throne to dust, it remembers"
    );
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

  const handleShowHint = () => {
    setDialogueText(hintText);
    setShowHint(true);
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
          <div
            className={`right-panel-content fade-transition ${
              fadeTransition ? "fade-out" : "fade-in"
            }`}
          >
            {showCodeInput && <DigitCodeInput onCorrect={handleCodeCorrect} />}
            {showCodeChallenge && (
              <CodeChallenge
                onPass={handleChallengePass}
                levelCompleted={levelCompleted}
                onThreeFails={handleShowHint}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
