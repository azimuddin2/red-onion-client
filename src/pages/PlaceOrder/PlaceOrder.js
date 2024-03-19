import React from 'react';
import './PlaceOrder.css';
import useAuth from '../../hooks/useAuth';
import paymentGif from '../../assets/images/payment.gif';
import useTitle from '../../hooks/useTitle';
import useCart from '../../hooks/useCart';
import toast from 'react-hot-toast';

const PlaceOrder = () => {
    useTitle('Place Order');
    const { user } = useAuth();
    const [carts] = useCart();

    const totalPrice = carts.reduce((sum, item) => item.price * item.quantity + sum, 0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = user.email;
        const currency = form.currency.value;
        const postCode = form.postCode.value;
        const address = form.address.value;

        const paymentInfo = {
            name,
            phone,
            email,
            currency,
            postCode,
            address
        };
        console.log(paymentInfo);
        form.reset();
        toast.success('Added Payment Information.');
    };

    return (
        <section className='container my-5 checkout-container'>
            <div>
                <img src={paymentGif} className='payment-gif' alt="payment gif" />
            </div>
            <div className='checkout-form'>
                <h3 className='text-center fs-4 mb-3'>Total Amount: ${totalPrice.toFixed(2)}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName || ''}
                            className='input-fields'
                            placeholder='Your Name'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="phone"
                            className='input-fields'
                            placeholder='Your Phone'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            value={user?.email || ''}
                            className='input-fields'
                            disabled
                        />
                    </div>
                    <div className='input-group'>
                        <select
                            defaultValue='BDT'
                            name='currency'
                            className="input-fields"
                        >
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name='postCode'
                            className='input-fields'
                            placeholder='Your Post Code'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name='address'
                            className='input-fields'
                            placeholder='Your Address'
                            required
                        />
                    </div>
                    <input className='pay-btn' type="submit" value="PAY" />
                </form>
            </div>
        </section>
    );
};

export default PlaceOrder;