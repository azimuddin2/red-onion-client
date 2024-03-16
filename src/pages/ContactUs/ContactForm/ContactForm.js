import React from 'react';
import './ContactForm.css';
import toast from 'react-hot-toast';

const ContactForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        console.log(name, email, phone, message);
        form.reset();
        toast.success('Form submited successful.');
    };

    return (
        <section className='mb-5'>
            <div>
                <h5 className='contact-short-title'>---Send Us a Message---</h5>
                <h1 className='contact-title'>CONTACT FORM</h1>
            </div>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <div className='name-email-field'>
                        <div>
                            <label className='input-title' htmlFor="">Name*</label> <br />
                            <input
                                type="text"
                                name="name"
                                className='name-field'
                                placeholder='Enter your name'
                                required
                            />
                        </div>
                        <div>
                            <label className='input-title' htmlFor="">Email*</label> <br />
                            <input
                                type="email"
                                name="email"
                                className='email-field'
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
                            placeholder='Write your message here...'
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