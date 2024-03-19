import React from 'react';
import useTitle from '../../../hooks/useTitle';
import useCart from '../../../hooks/useCart';
import Loading from '../../Shared/Loading/Loading';
import ErrorMessage from '../../Shared/ErrorMessage/ErrorMessage';
import CartItem from '../CartItem/CartItem';
import './Carts.css';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import cartGif from '../../../assets/images/cart.gif';
import { Link } from 'react-router-dom';

const Carts = () => {
    useTitle('Cart');
    const [carts, refetch, isLoading, error] = useCart();

    const totalQuantity = carts.reduce((sum, item) => item.quantity + sum, 0);
    const totalPrice = carts.reduce((sum, item) => item.price * item.quantity + sum, 0);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className='container my-5'>
            {
                carts.length > 0 ?
                    (
                        <div className='carts-container'>
                            <div>
                                {
                                    carts?.map(cartItem => <CartItem
                                        key={cartItem._id}
                                        cartItem={cartItem}
                                        refetch={refetch}
                                    ></CartItem>)
                                }
                            </div>
                            <div className='carts-second-part'>
                                <h2>Selecte Food: {carts?.length}</h2>
                                <h2>Subtotal Item: {totalQuantity}</h2>
                                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                                <button className='order-btn'>
                                    <span>Place Order</span>
                                    <IoArrowForwardCircleOutline className=' fs-5 ms-1' />
                                </button>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='text-center'>
                            <img src={cartGif} alt="cartGif" />
                            <Link to={'/'} className='text-decoration-none d-flex justify-content-center'>
                                <button className='order-btn'>
                                    <span>Please Add to Cart</span>
                                    <IoArrowForwardCircleOutline className=' fs-5 ms-1' />
                                </button>
                            </Link>
                        </div>
                    )
            }
        </section>
    );
};

export default Carts;