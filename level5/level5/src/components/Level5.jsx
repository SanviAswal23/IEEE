import { useState, useEffect } from "react";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import QuestionPanel from "./QuestionPanel";
import questions from "../data/level5Questions";
import "../styles/Level5.css";
import echoRobot from "../assets/echo-robot.png";
import bgImage from "../assets/bg.png"; 

export default function Level5() {
  const [timeLeft, setTimeLeft] = useState(900);
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerSubmit = () => {
    const correct = questions[current].a.toLowerCase().trim();
    const user = input.toLowerCase().trim();
    if (user === correct) {
      setScore(score + 1);
      setFeedback("✅ Correct! Good job.");
    } else {
      setFeedback("❌ Incorrect answer.");
    }
    setInput("");
    setCurrent(current + 1);
  };

  const isComplete = current >= questions.length || timeLeft <= 0;

  return (
    <div
      className="level5-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="level-heading">LEVEL 5</h1>

      <div className="echo-instruction">
        <img src={echoRobot} alt="Echo Robot" className="echo-robot" />
        <div className="robot-dialogue">
          Every second matters. Answer as many encrypted protocols before the session self-terminates.
        </div>
      </div>

      <div className="echo-hints right">ECHO HINTS</div>
      <Timer timeLeft={timeLeft} />
      <ProgressBar current={current} total={questions.length} />
      <QuestionPanel
        question={questions[current]}
        input={input}
        setInput={setInput}
        onSubmit={handleAnswerSubmit}
        feedback={feedback}
        isComplete={current >= questions.length}
        score={score}
        currentIndex={current}
        timeLeft={timeLeft}
      />
    </div>
  );
}
