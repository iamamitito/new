import React from 'react';
import './Button.css';

const button = (props) => (
    <button
        className={props.btnClass}
        onClick={props.clicked}>
        {props.children}
    </button>
);
export default button;