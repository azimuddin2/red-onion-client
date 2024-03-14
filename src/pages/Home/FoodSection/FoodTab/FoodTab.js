import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import searchGif from '../../../../assets/images/search.gif';
import './FoodTab.css';

const FoodTab = ({ items }) => {
    return (
        <>
            {
                items?.length > 0 ?
                    (
                        <div className='foods'>
                            {
                                items?.map(item => <FoodCard
                                    key={item._id}
                                    item={item}
                                ></FoodCard>)
                            }
                        </div>
                    )
                    :
                    (
                        <div className='text-center'>
                            <img src={searchGif} alt="search" />
                        </div>
                    )
            }
        </>
    );
};

export default FoodTab;