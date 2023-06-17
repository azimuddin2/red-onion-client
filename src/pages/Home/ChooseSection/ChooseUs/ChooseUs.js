import React from 'react';
import fastDelivery from '../../../../assets/images/fast-delivery.png';
import cookFood from '../../../../assets/images/chef-cook-food.png';
import homeDelivery from '../../../../assets/images/home-delivery.png';
import Choose from '../Choose/Choose';

const ChooseUs = () => {

    const chooseUs = [
        {
            _id: 1,
            image: fastDelivery,
            name: "Table Booking",
            description: "We’re hungry for the best things in life: bringing the best food and redefining the shopping experience to our customers.foodpanda is multi national, fast-growing business that maintains its appeal as localised service with community ambition.",
        },
        {
            _id: 1,
            image: cookFood,
            name: "A Good Auto Responder",
            description: "We’re hungry for the best things in life: bringing the best food and redefining the shopping experience to our customers.foodpanda is multi national, fast-growing business that maintains its appeal as localised service with community ambition.",
        },
        {
            _id: 1,
            image: homeDelivery,
            name: "Home Delivery",
            description: "We’re hungry for the best things in life: bringing the best food and redefining the shopping experience to our customers.foodpanda is multi national, fast-growing business that maintains its appeal as localised service with community ambition.",
        },
    ];

    return (
        <section className='container'>
            <div>
                <h2>Why you choose us</h2>
                <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className='row'>
                {
                    chooseUs.map(choose => <Choose
                        key={choose._id}
                        choose={choose}
                    ></Choose>)
                }
            </div>
        </section>
    );
};

export default ChooseUs;