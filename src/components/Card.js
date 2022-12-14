import React from "react";
import "../styles/Card.css";

const Card = ({data, select}) => {
    return(
        <div className="card" id={data.id} onClick={select}>
            <img src={data.img} alt="Team Logo"></img>
            <div className="card-title">{data.title}</div>
        </div>
    )
}

export default Card;