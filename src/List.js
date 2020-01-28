import React from 'react';
import './List.css';
import Card from './Card';

export default function List(props) {
   
    return (
        <div>
            <section className="List">
                <header className="List-header">
                    <h2>{props.header}</h2>
                </header>
                <div className="List-cards">
                    {props.card.map((card) =>
                    <Card 
                        onDeleteItem={props.onDeleteItem}
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                    />
                    )}
                    <div>
                        <button
                        onClick={() => props.addRandomItem(props.id)}
                        type='button'
                        className='List-add-button'
                        >
                            + Add Random Card
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

List.defaultProps = { 
    addRandomItem: () => {},    
}



