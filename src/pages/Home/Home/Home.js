import React from 'react';
import Foods from '../FoodSection/Foods/Foods';
import TableBook from '../TableBook/TableBook';
import ChooseUs from '../ChooseSection/ChooseUs/ChooseUs';
import Banner from '../Banner/Banner';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <TableBook></TableBook>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;