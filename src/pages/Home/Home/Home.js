import React, { useState } from 'react';
import Foods from '../FoodSection/Foods/Foods';
import TableBook from '../TableBook/TableBook';
import ChooseUs from '../ChooseSection/ChooseUs/ChooseUs';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    const [search, setSearch] = useState('');

    return (
        <div>
            <Banner setSearch={setSearch}></Banner>
            <Foods search={search}></Foods>
            <TableBook></TableBook>
            <ChooseUs></ChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;