import React from 'react';
import './FoodCard.css';
import { FiShoppingCart } from 'react-icons/fi';
import useAuth from '../../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useCart from '../../../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const { image, name, description, price } = item;
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (food) => {
        const { image, name, price, quantity } = food;
        const cartItem = {
            image,
            name,
            price,
            quantity,
            email: user?.email
        };
        if (user?.email) {
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        refetch()
                        toast.success('Food added on the cart.');
                    }
                    else {
                        toast.success(result.message);
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order food.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#f91944',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };

    return (
        <div className='food'>
            <img src={image} alt={name} />
            <div>
                <h2 className='food-name'>{name}</h2>
                <p className='food-description'>{description}</p>
                <div className='price-icon'>
                    <p className='food-price'>${price}</p>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className='cart-btn'
                    >
                        <FiShoppingCart></FiShoppingCart>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;