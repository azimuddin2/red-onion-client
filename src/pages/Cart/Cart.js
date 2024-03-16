import React from 'react';
import useTitle from '../../hooks/useTitle';

const Cart = () => {
    useTitle('Cart');
    
    return (
        <div>
            <h1>This cart add items.</h1>
        </div>
    );
};

export default Cart;