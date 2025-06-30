import TopBar from "../components/TopBar";
import ChessBoard from "../components/ChessBoard";
import MissionPanel from "../components/MissionPanel";
import CodeInput from "../components/CodeInput";
import ModalViewer from "../components/ModalViewer";
import echoRobot from "../assets/echo.png";
import riddles from "../data/riddles";
import { useState } from "react";

export default function LevelThree() {
  const [selectedTile, setSelectedTile] = useState(null);
  const [answer, setAnswer] = useState("");
  const [tileClicks, setTileClicks] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const [robotMessage, setRobotMessage] = useState(
    "Nemora's mind hides not in memory or logic, but in chaotic patterns. We found fragments in an old war simulation—64 cells, one silent truth. Most are noise. Some deceive. Only one whispers the end. Unmask the silence. Find the whisper before checkmate."
  );

  const handleTileClick = (id) => {
    setSelectedTile(id);
    setResultMessage("");
    const updatedClicks = tileClicks + 1;
    setTileClicks(updatedClicks);

    if (updatedClicks === 2 && id !== "E5") {
      setRobotMessage(
        "Not the queen’s pawn but the king’s first pride, Step two squares forth and claim the wide. A center square where battles ignite—Find this bold step, and you'll be right."
      );
    }
  };

  const handleSubmit = () => {
    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer = riddles["E5"].answer.toLowerCase();

    if (!userAnswer) {
      setResultMessage("❌ Please enter an answer.");
      return;
    }

    if (userAnswer === correctAnswer) {
      setResultMessage("✅ Well done! You've passed the level.");
    } else {
      setResultMessage("❌ Incorrect answer. Try again.");
    }
  };

  return (
    <div className="level3-container">
      <div className="bg-overlay"></div>
      <div className="animated-light"></div>

      <div className="topbar-wrapper">
        <TopBar />
        <div className="topbar-divider"></div>
      </div>

      <div className="main-content">
        <div className="left-panel bordered-block">
          <div className="section-title">// CHECKMATE FILES</div>
          <ChessBoard onTileClick={handleTileClick} />
        </div>

        <div className="right-panel bordered-block vertical-stack">
          <MissionPanel />
          <CodeInput
            answer={answer}
            setAnswer={setAnswer}
            onSubmit={handleSubmit}
            showHint={false}
          />

          {resultMessage && (
            <div
              className="hint-box"
              style={{
                textAlign: "center",
                marginTop: "1rem",
                color: resultMessage.startsWith("✅") ? "lightgreen" : "red",
              }}
            >
              {resultMessage}
            </div>
          )}
        </div>
      </div>

      <ModalViewer
        selectedTile={selectedTile}
        closeModal={() => setSelectedTile(null)}
        riddle={riddles[selectedTile] || null}
      />

      <div className="robot-container">
        <img src={echoRobot} alt="Robot Assistant" className="robot-helper" />
        <div className="robot-dialogue">{robotMessage}</div>
      </div>
    </div>
  );
}
