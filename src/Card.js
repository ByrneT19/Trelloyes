import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="Card">
            <button>Delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;