import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './FoodTab.css';

const FoodTab = ({ items }) => {
    return (
        <div className='foods'>
            {
                items?.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default FoodTab;