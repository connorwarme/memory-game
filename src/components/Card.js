import React from "react";
import "../styles/Card.css";

const Card = ({data, select}) => {
    return(
        <div className="card" id={data.id} onClick={select}>
            <div className="card-title">{data.title}</div>
        </div>
    )
}

export default Card;