import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Card.css"

function Card({ id, img, title, price }) {
  return (
    <Link to={`/shop/${id}`} state={{ id, img, title, price}}>
      <div className="cardContainer">
        <div className="itemImg">
          <img src={img} alt={title} className='image'/>
        </div>
        <div className="details">
          <div className="itemTitle">{title}</div>
          <div className="price">$ {price}</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
