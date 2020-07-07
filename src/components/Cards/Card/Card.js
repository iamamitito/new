import React from 'react';
import './Card.css';

const card = (props) => {

    return (
        <div className={props.class}>
            <div className="inner-card">
                <div className="inner-card-front">
                    <div className="flip" onClick={props.clicked}><i className="fas fa-sync-alt"></i></div>
                    <div className="delete" onClick={props.delete}><i className="fas fa-trash-alt"></i></div>
                    <p>{props.question}</p>
                </div>
                <div className="inner-card-back">
                    <div className="flip"
                        onClick={props.clicked}><i className="fas fa-sync-alt"></i></div>
                    <div className="delete" onClick={props.delete}><i className="fas fa-trash-alt"></i></div>
                    <p>{props.answer}</p>
                </div>
            </div>
        </div>
    );

};

export default card;