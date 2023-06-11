import React from 'react';
import './Foods.css';

const Foods = () => {
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

        </section>
    );
};

export default Foods;