import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="Card">
            <button onClick={() => props.onDeleteItem(props.id)}
            >
                Delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

Card.defaultProps = {
    onDeleteItem: () => {}
}

export default Card;