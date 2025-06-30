export default function CodeInput({ answer, setAnswer, onSubmit, showHint }) {
    return (
      <div className="code-input-area">
        <label htmlFor="codeInput">//ACCESS:INPUT CODE//</label>
        <textarea
          id="codeInput"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="input-box"
        />
        <button className="submit-btn" onClick={onSubmit}>SUBMIT</button>
        {showHint && (
          <div className="hint-box">Hint: The answer may lie at E5 🕵️‍♀️</div>
        )}
      </div>
    );
  }