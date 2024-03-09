import React, { useState } from 'react';
import Foods from '../FoodSection/Foods/Foods';
import TableBook from '../TableBook/TableBook';
import ChooseUs from '../ChooseSection/ChooseUs/ChooseUs';
import Banner from '../Banner/Banner';

const Home = () => {
    const [search, setSearch] = useState('');

    return (
        <div>
            <Banner setSearch={setSearch}></Banner>
            <Foods search={search}></Foods>
            <TableBook></TableBook>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;