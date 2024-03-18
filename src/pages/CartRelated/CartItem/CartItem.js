import React from 'react';
import './CartItem.css';
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import { RiDeleteBin5Fill, RiDeleteBin5Line } from "react-icons/ri";

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

                <div className='d-flex align-items-center'>
                    <button className='border-0 d-flex align-items-center p-1 rounded-1'>
                        <IoRemove />
                    </button>
                    <span className='bg-white px-2 mx-2 rounded-1'>{quantity}</span>
                    <button className='border-0 d-flex  align-items-center p-1 rounded-1'>
                        <IoMdAdd />
                    </button>
                </div>

                <div className='d-flex justify-content-end mt-2'>
                    {/* <button className='border-0 mt-2 delete-btn'> */}
                    <RiDeleteBin5Fill style={{ color: '#f91944', cursor: 'pointer' }} className='fs-4' />
                    {/* </button> */}
                </div>

            </div>

        </div>
    );
};

export default CartItem;