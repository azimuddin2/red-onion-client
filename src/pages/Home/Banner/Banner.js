import React, { useRef } from 'react';
import './Banner.css';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Banner = ({ setSearch }) => {
    const searchRef = useRef();

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };

    return (
        <section className='banner-section'>
            <div>
                <h1 className='banner-title'>Best food waiting for your belly</h1>
                <InputGroup>
                    <Form.Control
                        ref={searchRef}
                        type='text'
                        className="search-input-feild"
                        placeholder="Search food items"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button
                        onClick={handleSearch}
                        className='search-btn'
                    >
                        Search
                    </Button>
                </InputGroup>
            </div>
        </section>
    );
};

export default Banner;