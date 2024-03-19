import React from 'react';
import './PlaceOrder.css';
import useAuth from '../../hooks/useAuth';
import paymentGif from '../../assets/images/payment.gif';

const PlaceOrder = () => {
    const { user } = useAuth();

    return (
        <section className='container my-5 checkout-container'>
            
            <div>
                <img src={paymentGif} alt="" />
            </div>
            
            
            <div className='checkout-form'>


                <form>

                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName || ''}
                            className='input-field'
                            placeholder='Your Name'
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name="phone"
                            className='input-field'
                            placeholder='Your Phone'
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            value={user?.email || ''}
                            className='input-field'
                            disabled
                        />
                    </div>

                    <div className='input-group'>
                        <select
                            defaultValue='BDT'
                            name='currency'
                            className="input-field"
                        >
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name='postCode'
                            className='input-field'
                            placeholder='Your Post Code'
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name='address'
                            className='input-field'
                            placeholder='Your Address'
                            required
                        />
                    </div>

                    <input className='form-submit' type="submit" value="PAY" />

                </form>


            </div>
        </section>
    );
};

export default PlaceOrder;