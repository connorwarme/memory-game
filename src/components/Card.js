import React from "react";
import "../styles/Card.css";

const Card = ({data}) => {
    return(
        <div className="card" id={data.id}>
            <div className="card-title">{data.title}</div>
        </div>
    )
}

export default Card;