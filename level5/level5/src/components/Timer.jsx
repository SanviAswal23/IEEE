export default function Timer({ timeLeft }) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const isLow = timeLeft <= 10;
    return (
      <div className={`timer ${isLow ? "flash" : ""}`}>
        <div className="timer-top-label">TIME LEFT</div>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </div>
    );
  }
  