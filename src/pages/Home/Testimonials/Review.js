import React from 'react';
import StarRatings from 'react-star-ratings';
import quote from '../../../assets/images/quote.png';

const Review = ({ review }) => {
    const { rating, details, name } = review;

    return (
        <div className='px-lg-5 px-2 text-center'>
            <div>
                <StarRatings
                    rating={rating}
                    starRatedColor="#f91944"
                    name="rating"
                    starSpacing="2px"
                    starDimension="30px"
                />
            </div>
            <img src={quote} alt="quote" style={{ width: '60px' }} className='mx-auto mt-3' />
            <div className='mt-3 w-75 mx-auto'>
                <p style={{ color: '#737373' }}>{details}</p>
                <h2 className='fs-4'>{name}</h2>
            </div>
        </div>
    );
};

export default Review;