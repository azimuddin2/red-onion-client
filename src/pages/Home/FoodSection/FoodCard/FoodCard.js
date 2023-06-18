import React from 'react';
import './FoodCard.css';

const FoodCard = ({ item }) => {
    const { image, name, description, price } = item;

    return (
        <div className='shadow col-sm-12 col-lg-3 food'>
            <img src={image} alt="" />
            <div>
                <h2 className='food-name'>{name}</h2>
                <p className='food-description'>{description}</p>
                <p className='food-price'>${price}</p>
            </div>
        </div>
    );
};

export default FoodCard;