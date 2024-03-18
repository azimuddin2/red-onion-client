import React, { useState } from 'react';
import './CartItem.css';
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";
import swal from 'sweetalert';
import toast from 'react-hot-toast';

const CartItem = ({ cartItem, refetch }) => {
    const { name, image, price, quantity } = cartItem;
    const [newQuantity, setNewQuantity] = useState(quantity);
    const totalPrice = price * newQuantity;

    const handleAddQuantity = () => {
        setNewQuantity(newQuantity + 1);
    };

    const handleRemoveQuantity = () => {
        if (newQuantity > 1) {
            setNewQuantity(newQuantity - 1)
        }
    };

    const handleDelete = (item) => {
        swal({
            title: "Are you sure?",
            text: `This Food - ${item.name}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/carts/${item._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged === true) {
                                refetch();
                                toast.success('Food deleted successfully.');
                            }
                        })
                }
            });
    };

    return (
        <div className='cart-item'>
            <div>
                <img style={{ width: '80px' }} src={image} alt={name} />
            </div>
            <div className='cart-item-info'>
                <h2>{name}</h2>
                <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div>
                <div className='d-flex align-items-center'>
                    <button
                        onClick={handleRemoveQuantity}
                        className='border-0 d-flex align-items-center p-1 rounded-1'
                    >
                        <IoRemove />
                    </button>
                    <span className='bg-white px-2 mx-2 rounded-1'>{newQuantity}</span>
                    <button
                        onClick={handleAddQuantity}
                        className='border-0 d-flex  align-items-center p-1 rounded-1'
                    >
                        <IoMdAdd />
                    </button>
                </div>
                <div className='d-flex justify-content-end mt-2'>
                    <RiDeleteBin5Fill
                        onClick={() => handleDelete(cartItem)}
                        style={{ color: '#f91944', cursor: 'pointer' }}
                        className='fs-4'
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;