import React from 'react';
import './CartItem.css';

const CartItem = ({ cartItem, refetch }) => {
    const { name, image, price, quantity } = cartItem;

    return (
        <div className='cart-item'>
            <div>
                <img style={{ width: '80px' }} src={image} alt={name} />
            </div>
            <div className='cart-item-info'>
                <h2>{name}</h2>
                <p>${price}</p>
            </div>
            <div>
                {quantity}
            </div>
        </div>
    );
};

export default CartItem;