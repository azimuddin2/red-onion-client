import React from 'react';
import './FoodCard.css';
import { FiShoppingCart } from 'react-icons/fi';

const FoodCard = ({ item }) => {
    const { image, name, description, price } = item;

    return (
        <div className='food'>
            <img src={image} alt="" />
            <div>
                <h2 className='food-name'>{name}</h2>
                <p className='food-description'>{description}</p>
                <div className='price-icon'>
                    <p className='food-price'>${price}</p>
                    <div className='shop-icon'>
                        <FiShoppingCart></FiShoppingCart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;