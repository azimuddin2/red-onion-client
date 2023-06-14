import React, { useState } from 'react';
import './TableBook.css';
import { Form } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const TableBook = () => {
    const [selectDate, setSelectDate] = useState(new Date());

    return (
        <section className='container table-book-container'>
            <div className='table-book-info'>
                <h1>30% OFF</h1>
                <h2>For Online Reservation</h2>
                <p>Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea.</p>
                <div>
                    <p><FiCheckCircle className='check-icon'></FiCheckCircle> Lorem ipsum dolor sit amet</p>
                    <p><FiCheckCircle className='check-icon'></FiCheckCircle> Lorem ipsum dolor sit amet</p>
                    <p><FiCheckCircle className='check-icon'></FiCheckCircle> Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='table-book-form shadow'>
                <h2 className='text-center mb-3'>Book Your Table</h2>
                <Form>
                    <Form.Group controlId="formBasicName" className='mb-3'>
                        <Form.Control
                            name='name'
                            type="text"
                            placeholder="Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className='mb-3'>
                        <Form.Control
                            name='email'
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicDate" className='mb-3'>
                        <ReactDatePicker
                            name='date'
                            className="form-control"
                            showIcon
                            selected={selectDate}
                            onChange={(date) => setSelectDate(date)}
                            showTimeSelect
                            dateFormat="Pp"
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridState" className='mb-4'>
                        <Form.Control name='person' as="select">
                            <option>Select Person</option>
                            <option>Person-1</option>
                            <option>Person-2</option>
                            <option>Person-3</option>
                            <option>Person-4</option>
                            <option>Person-5</option>
                            <option>Person-6</option>
                        </Form.Control>
                    </Form.Group>
                    <button className='book-btn' type="submit">Book Now</button>
                </Form>
            </div>
        </section>
    );
};

export default TableBook;