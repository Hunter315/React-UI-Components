import React from 'react';
import './Button.css';

const OperatorButton = (props) => {
    return(
        <button className = {props.buttonStyle}>
        {props.text}
        </button>
    )
    
};

export default OperatorButton;