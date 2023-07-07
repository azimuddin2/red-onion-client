import React from 'react';
import Location from '../Location/Location';
import ContactForm from '../ContactForm/ContactForm';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className='container'>
            <div className='contact-us-image'>
                <div className='contact-us-info'>
                    <h1>Contact Us</h1>
                    <p>Would you like to try a dish?</p>
                </div>
            </div>
            <Location></Location>
            <ContactForm></ContactForm>
        </section>
    );
};

export default ContactUs;