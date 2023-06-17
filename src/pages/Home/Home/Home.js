import React from 'react';
import Foods from '../FoodSection/Foods/Foods';
import TableBook from '../TableBook/TableBook';
import ChooseUs from '../ChooseSection/ChooseUs/ChooseUs';

const Home = () => {

    return (
        <div>
            <Foods></Foods>
            <TableBook></TableBook>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;