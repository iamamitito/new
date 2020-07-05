import React from 'react';
import './Navigation.css';
import Button from '../Button/Button';

const navigation = (props) => (
    <div className="navigation">
        <Button btnClass="nav-btn" clicked={props.prev}>
            <i className="fas fa-arrow-left"></i>
        </Button>
        <p id="current">{props.currentCard}</p>
        <Button btnClass="nav-btn" clicked={props.next}>
            <i className="fas fa-arrow-right"></i>
        </Button>
    </div>
);

export default navigation;