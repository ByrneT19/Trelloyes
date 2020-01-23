import React from 'react';
import './List.css';
import Card from './Card';

List.defaultProps = { 
    header: '', 
    card: [] }

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
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />
                    )}
                    <div>
                        <button
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

