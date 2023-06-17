import React from 'react';
import './Choose.css';

const Choose = ({ choose }) => {
    const { image, name, description } = choose;

    return (
        <div className='col-4 choose'>
            <img src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Choose;