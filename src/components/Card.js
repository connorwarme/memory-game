import React from "react";
import "../styles/Card.css";

const Card = ({ data, select }) => {
  const alt = `${data.title} Logo`;
  return (
    <div className="card" id={data.id} onClick={select}>
      <img src={data.img} alt={alt} title={alt}></img>
      <div className="card-title">{data.title}</div>
    </div>
  );
};

export default Card;
