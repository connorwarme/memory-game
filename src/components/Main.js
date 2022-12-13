import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import content from "./Content";
import "../styles/Main.css";

const Main = () => {
    const [score, setScore] = useState(0);
    const [userClicks, setUserClicks] = useState([]);
    const [cards, setCards] = useState(content);

    const addToUserClicks = (object) => {
        setUserClicks([...userClicks, object]);
    }
    const clearUserClicks = () => {
        setUserClicks([]);
    }
    const cardClick = (e) => {

    }
    return(
        <div className="main-content">
            <div className="scoreboard-container">Score: {score}</div>
            <div className="card-container">
                {cards.map(card => {
                    return <Card key={card.id} data={card} />
                })}
            </div>
        </div>
    )
}

export default Main;