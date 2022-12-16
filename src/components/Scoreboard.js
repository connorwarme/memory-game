import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ scores }) => {
    const instructions = `Test your fandom! To score, click on a team logo. Don't click the same logo twice!`;
    return (
        <div className='scoreboard'>
            <div className="scoreboard-instructions">{instructions}</div>
            <div className="score-container">
                <div>Score: {scores.score}</div>
                <div>Best Score: {scores.bestScore}</div>
            </div>
        </div>
    )
}

export default Scoreboard;