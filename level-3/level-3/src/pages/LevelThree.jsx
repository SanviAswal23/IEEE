import TopBar from "../components/TopBar";
import ChessBoard from "../components/ChessBoard";
import MissionPanel from "../components/MissionPanel";
import CodeInput from "../components/CodeInput";
import ModalViewer from "../components/ModalViewer";
import { useState } from "react";

const riddles = {
  A1: { question: "I start the count but end with none. In most loops, I help things run. What am I?", answer: "i" },
  A2: { question: "I'm the structure behind the style, not HTML, yet versatile. What am I?", answer: "CSS" },
  A3: { question: "I throw errors but catch them too. I'm used in Java, how about you?", answer: "try" },
  A4: { question: "When you call me, I might return. I often nest, and deeply churn.", answer: "function" },
  A5: { question: "I'm a flaw that makes your app stall, I sneak in code, unnoticed by all.", answer: "bug" },
  A6: { question: "I'm the address of data, not the data itself. In C, I start with &.", answer: "pointer" },
  A7: { question: "I represent yes or no, true or false in a single go.", answer: "boolean" },
  A8: { question: "I repeat instructions, again and again. Until a condition says 'end, my friend.'", answer: "loop" },
  B1: { question: "I'm a common structure with keys and values. JSON loves me.", answer: "object" },
  B2: { question: "I stand before HTML and often style it well.", answer: "head" },
  B3: { question: "I'm the part of your site where interaction flows—React loves to manage me.", answer: "state" },
  B4: { question: "I'm the gate that lets conditions in, guarded by logic, wrapped in a sin.", answer: "if" },
  B5: { question: "I may be null, but I'm not undefined. I exist, but barely defined.", answer: "null" },
  B6: { question: "I'm a JavaScript keyword, I change the way variables behave.", answer: "let" },
  B7: { question: "I wait for asynchronous things to resolve. What keyword am I?", answer: "await" },
  B8: { question: "I don't change once I'm set. My value's final, you can bet.", answer: "const" },
  C1: { question: "My job is to sort and seek; binary and bubble are my technique.", answer: "algorithm" },
  C2: { question: "I fetch data from APIs and update the view. What part of JS am I?", answer: "fetch" },
  C3: { question: "I stand for Document Object Model, what am I really called?", answer: "DOM" },
  C4: { question: "I represent nothing, the absence of a value.", answer: "undefined" },
  C5: { question: "I join the frontend with the backend, bridging user and data.", answer: "API" },
  C6: { question: "I check conditions again and again, until one day I stop the pain.", answer: "while" },
  C7: { question: "I help you loop through arrays, with an arrow, I can amaze.", answer: "map" },
  C8: { question: "I'm a decision maker in switch-case blocks.", answer: "case" },
  D1: { question: "I only execute once when a page loads. In React, I'm often used with useEffect.", answer: "componentDidMount" },
  D2: { question: "I group items together in order. Zero-based index is my border.", answer: "array" },
  D3: { question: "I crash apps if you don't handle me right. Often show up as red in sight.", answer: "error" },
  D4: { question: "I wrap many lines of code, but don't forget my closing node.", answer: "{}" },
  D5: { question: "I only run when something changes. My hook in React rearranges.", answer: "useEffect" },
  D6: { question: "I help sort and filter, I'm not coffee, but quite a lifter.", answer: "array methods" },
  D7: { question: "I'm the start of an HTML doc, can't be seen but I'm on top.", answer: "doctype" },
  D8: { question: "I'm the hidden part in HTML where SEO does its part.", answer: "meta" },
  E1: { question: "I'm the root of all HTML.", answer: "html" },
  E2: { question: "I hold code that runs before anything shows.", answer: "script" },
  E3: { question: "I bring websites to life—one event at a time.", answer: "event listener" },
  E4: { question: "You console.log me to debug faster.", answer: "variable" },
  E5: { question: "I am the bug you couldn’t see, hidden in an if or a faulty key. I crash the app without a trace, fix me right to win this race.", answer: "null pointer exception" },
  E6: { question: "I'm what you get when you forget a semicolon in C.", answer: "syntax error" },
  E7: { question: "I'm like a library, but I handle UI.", answer: "React" },
  E8: { question: "I let you write asynchronous code that looks synchronous.", answer: "async/await" },
  F1: { question: "I'm a backend language known for snakes.", answer: "python" },
  F2: { question: "I'm a loop that always runs, unless you break me.", answer: "infinite loop" },
  F3: { question: "You push me, I pop out. I work LIFO, no doubt.", answer: "stack" },
  F4: { question: "I follow FIFO, queues love me.", answer: "queue" },
  F5: { question: "I wrap code to reuse it, I take inputs and can return it.", answer: "function" },
  F6: { question: "I'm an event fired on clicking a button.", answer: "onClick" },
  F7: { question: "I wrap JSX in React, and hold state.", answer: "component" },
  F8: { question: "I track changes in input fields in React.", answer: "onChange" },
  G1: { question: "I hold multiple elements together in React.", answer: "fragment" },
  G2: { question: "I define structure, not style. Mark me with <>.", answer: "HTML" },
  G3: { question: "I make websites dynamic.", answer: "JavaScript" },
  G4: { question: "I'm a value that can only be true or false.", answer: "boolean" },
  G5: { question: "You wrap me around your code to catch issues.", answer: "try-catch" },
  G6: { question: "I'm where the browser shows text.", answer: "console.log" },
  G7: { question: "I trigger re-renders in React when I change.", answer: "state" },
  G8: { question: "I represent what the user sees on the screen.", answer: "UI" },
  H1: { question: "I break infinite loops, a savior in disguise.", answer: "break" },
  H2: { question: "I'm a silent killer, a mistake you'll hate. I happen when loops don't relate.", answer: "infinite loop" },
  H3: { question: "You often return me early from a function.", answer: "null" },
  H4: { question: "I let code repeat, and save time, I'm called with arguments and maybe a rhyme.", answer: "function" },
  H5: { question: "I stop your code dead in its track, especially when something is whack.", answer: "exception" },
  H6: { question: "I'm the universal structure of JSON.", answer: "key-value pair" },
  H7: { question: "I let two conditions live inside a line. I'm &&.", answer: "logical AND" },
  H8: { question: "I start with a #, define styles in CSS.", answer: "id selector" }
};

export default function LevelThree() {
  const [selectedTile, setSelectedTile] = useState(null);
  const [answer, setAnswer] = useState("");
  const [tileClicks, setTileClicks] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const [robotMessage, setRobotMessage] = useState("Need help? Click any tile to reveal clues.");

  const handleTileClick = (id) => {
    setSelectedTile(id);
    setResultMessage("");
    const updatedClicks = tileClicks + 1;
    setTileClicks(updatedClicks);

    if (updatedClicks === 2 && id !== "E5") {
      setRobotMessage(
        "Curious? where the elephant marches fifth, the truth may lie."
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
        <img
          src="/assets/echo.png"
          alt="Robot Assistant"
          className="robot-helper"
        />
        <div className="robot-dialogue">{robotMessage}</div>
      </div>
    </div>
  );
}
