import React, { useState } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import './Choose.css';

const Choose = ({ choose }) => {
    const { image, name, description } = choose;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }

    return (
        <div className='col-12 col-md-6 col-lg-4 choose'>
            <img src={image} alt="" />
            <div className='choose-info'>
                <h3>{name}</h3>
                <p>
                    {isReadMore ? description.slice(0, 100) : description}
                    <span onClick={toggleReadMore}>
                        {
                            isReadMore ?
                                <span style={{ cursor: 'pointer' }}>
                                    <span style={{ color: '#7ac948', fontWeight: '500', marginRight: '5px' }}>...read more</span>
                                    <BsArrowRightCircleFill style={{ color: '#7ac948' }}></BsArrowRightCircleFill>
                                </span>
                                :
                                <span style={{ cursor: 'pointer' }}>
                                    <span style={{ color: '#7ac948', fontWeight: '500', marginRight: '5px' }}>show less</span>
                                    <BsArrowRightCircleFill style={{ color: '#7ac948' }}></BsArrowRightCircleFill>
                                </span>
                        }
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Choose;