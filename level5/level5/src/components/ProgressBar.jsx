
export default function ProgressBar({ current, total }) {
    const percent = Math.round((current / total) * 100);
  
    return (
      <>
        <div className="progress-info">
          <span>Question {current + 1} of {total}</span>
          <span>{percent}%</span>
        </div>
  
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </>
    );
  }
  