import React from "react";
import "../styles/LevelTwo.css";
import clockLoopVideo from "../assets/clock-loop (2).mp4";

export default function ClockVideo() {
  return (
    <div className="clock-video-container">
      <video src={clockLoopVideo} autoPlay muted loop className="clock-video" />
    </div>
  );
}