import React from 'react';
import './FoodCard.css';

const FoodCard = ({ item }) => {
    const { image, name, description, price} = item;

    return (
        <div className='shadow col-sm-12 col-lg-3 food'>
            <img src={image} alt="" />
            <div>
                <h2 className='food-name'>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default FoodCard;