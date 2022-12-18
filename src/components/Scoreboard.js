import React from "react";
import "../styles/Scoreboard.css";

const Scoreboard = ({ scores }) => {
  const instructions = `Test your fandom! To score, click on a team logo. Don't click the same logo twice!`;
  const fanLevel = [
    "Casual",
    "Bandwagon",
    "Dedicated",
    "Superfan",
    "Elite",
    "Legendary",
  ];
  const getRanking = (input) => {
    if (input < 5) {
      return fanLevel[0];
    } else if (input < 10) {
      return fanLevel[1];
    } else if (input < 15) {
      return fanLevel[2];
    } else if (input < 20) {
      return fanLevel[3];
    } else if (input < 25) {
      return fanLevel[4];
    } else {
      return fanLevel[5];
    }
  };
  return (
    <div className="scoreboard-wrapper">
      <div className="scoreboard">
        <div className="scoreboard-instructions">{instructions}</div>
        <div className="score-container">
          <div>Your Score: {scores.score}</div>
          <div>
            Fan Ranking: <strong>{getRanking(scores.score)}</strong>
          </div>
          <div>Best Score: {scores.bestScore}</div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
