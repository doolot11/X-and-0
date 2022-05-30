import React from 'react';
import './Square.css'

const Square = (props) => {
    return (
        <div>
            <button className='square' onClick={props.onClick} >{props.value} </button>
        </div>
    );
}

export default Square;
