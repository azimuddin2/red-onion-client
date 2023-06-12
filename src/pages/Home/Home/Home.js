import React from 'react';
import Foods from '../Foods/Foods';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../../../components/Categories/Categories';

const Home = () => {
    const foods = useLoaderData();

    return (
        <div>
            <Foods foods={foods}></Foods>
        </div>
    );
};

export default Home;