import React, { useState } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import content from "./Content";
import "../styles/Main.css";

const Main = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState(content);

    const clearClicks = () => {
        const cardsCopy = [...cards];
        cardsCopy.forEach(card => card.clicked = false);
        setCards(cardsCopy);
    }
    const shuffleCards = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const findCardIndex = (e) => {
        return cards.findIndex(card => card.id === e.target.parentElement.id);
    }
    const updateBestScore = (updatedScore) => {
        if (updatedScore > bestScore) {
            setBestScore(updatedScore);
        }
    }
    const checkCard = (index) => {
        const clicked = cards[index].clicked;
        const cardsCopy = [...cards];
        if (!clicked) {
            cardsCopy[index].clicked = true;
            setCards(shuffleCards(cardsCopy));
            const updatedScore = score + 1;
            setScore(updatedScore);
            updateBestScore(updatedScore);
        } else if (clicked) {
            clearClicks();
            setScore(0);
        } else {
            console.log('Something aint right... :(');
        }
    }
    const cardClick = (e) => {
        const cardIndex = findCardIndex(e);
        checkCard(cardIndex);
    }
    const scores = {
        score: score,
        bestScore: bestScore,
    }
    return(
        <div className="main-content">
            <Scoreboard scores={scores} />
            <div className="card-container">
                {cards.map(card => {
                    return <Card key={card.id} data={card} select={cardClick}/>
                })}
            </div>
        </div>
    )
}

export default Main;