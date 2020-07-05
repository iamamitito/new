import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.showModal}
            clicked={props.hideModal} />
        <div className={props.modalClass}>
            {props.children}
        </div>
    </React.Fragment>
);

export default modal;
