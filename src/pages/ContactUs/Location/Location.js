import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { FaClock } from 'react-icons/fa';
import './Location.css';

const Location = () => {
    return (
        <section className='my-5'>
            <div>
                <h5 className='visit-us'>---Visit Us---</h5>
                <h1 className='our-location'>Our Location</h1>
            </div>

            <div className='location-container'>
                <div className='location-box'>
                    <div className='location-icon'>
                        <BiPhoneCall className='fs-4'></BiPhoneCall>
                    </div>
                    <div className='location-info'>
                        <h2>Phone</h2>
                        <p>+000 18830 61967</p>
                    </div>
                </div>

                <div className='location-box'>
                    <div className='location-icon'>
                        <MdLocationOn className='fs-4'></MdLocationOn>
                    </div>
                    <div className='location-info'>
                        <h2>Address</h2>
                        <p>Level-4, 34, Banani-Dhaka</p>
                    </div>
                </div>

                <div className='location-box'>
                    <div className='location-icon'>
                        <FaClock className='fs-5'></FaClock>
                    </div>
                    <div className='location-info'>
                        <h2>WORKING HOURS</h2>
                        <p>Sat - Fri : 08:00 - 22:00</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;