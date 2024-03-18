import React from 'react';
import useTitle from '../../../hooks/useTitle';
import useCart from '../../../hooks/useCart';
import Loading from '../../Shared/Loading/Loading';
import ErrorMessage from '../../Shared/ErrorMessage/ErrorMessage';
import CartItem from '../CartItem/CartItem';
import './Carts.css';

const Carts = () => {
    useTitle('Cart');
    const [carts, refetch, isLoading, error] = useCart();
    const totalPrice = carts.reduce((sum, item) => item.price + sum, 0);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className='container my-5 carts-container'>
            <div>
                {
                    carts?.map(cartItem => <CartItem
                        key={cartItem._id}
                        cartItem={cartItem}
                        refetch={refetch}
                    ></CartItem>)
                }
            </div>
            <div>
                <h2>Selected Food: {carts.length}</h2>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
        </section>
    );
};

export default Carts;