import React, { useEffect, useState } from 'react';
import CategoryLink from '../CategoryLink/CategoryLink';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            {
                categories.map(category => <p key={category._id}>
                    <CategoryLink to={`/category/${category._id}`}>
                        {category.name}
                    </CategoryLink>
                </p>)
            }
        </div>
    );
};

export default Categories;