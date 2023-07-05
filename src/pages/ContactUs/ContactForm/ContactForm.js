import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className='mb-5'>
            <div>
                <h5 className='contact-short-title'>---Send Us a Message---</h5>
                <h1 className='contact-title'>CONTACT FORM</h1>
            </div>

            <div className='contact-form'>
                <form action="">
                    <div className='name-email-field'>
                        <div>
                            <label className='input-title' htmlFor="">Name*</label> <br />
                            <input
                                type="text"
                                name="name"
                                className='input-field'
                                placeholder='Enter your name'
                                required
                            />
                        </div>
                        <div>
                            <label className='input-title' htmlFor="">Email*</label> <br />
                            <input
                                type="email"
                                name="email"
                                className='input-field'
                                placeholder='Enter your email'
                                required
                            />
                        </div>
                    </div>


                    <div>
                        <label className='input-title' htmlFor="">Phone*</label> <br />
                        <input
                            type="text"
                            name="phone"
                            className='phone-field'
                            placeholder='Enter your phone number'
                            required
                        />
                    </div>

                    <div>
                        <label className='input-title' htmlFor="">Message*</label> <br />
                        <textarea
                            name="message"
                            cols="30"
                            rows="6"
                            className='message-field'
                        ></textarea>
                    </div>


                    <div className='d-flex justify-content-center mt-3'>
                        <button className='contact-form-btn' type="submit">Send Message</button>
                    </div>

                </form>
            </div>


        </section>
    );
};

export default ContactForm;