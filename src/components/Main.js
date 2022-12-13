import React, { useState } from "react";

const Main = () => {
    const [score, setScore] = useState(0);
    return(
        <div className="main-content">
            <div className="scoreboard-container">Score: {score}</div>
            <div className="card-container"></div>
        </div>
    )
}

export default Main;