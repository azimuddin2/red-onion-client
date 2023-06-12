import React from 'react';
import './Foods.css';
import Categories from '../../../components/Categories/Categories';
import { Outlet } from 'react-router-dom';

const Foods = ({ foods }) => {
    console.log(foods)
    return (
        <section>
            <div className='background-img'>
                <input
                    type="text"
                    class="input-field"
                    placeholder="Search food items"
                />
                <button class="search-btn">Search</button>
            </div>
            <div>
                <Categories></Categories>
            </div>
            <div className='d-grid row'>
                {
                    foods?.map(food => <p food={food}><img src={food.image} className='w-25' alt="" /></p>)
                }
            </div>
        </section>
    );
};

export default Foods;