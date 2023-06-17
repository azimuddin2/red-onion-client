import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './FoodTab.css';

const FoodTab = ({ items }) => {
    return (
        <div className='row mt-5 gap-4 d-flex align-items-center justify-content-center'>
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default FoodTab;