import React, { useRef } from 'react';
import './Banner.css';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const Banner = ({ setSearch }) => {
    const searchRef = useRef();

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };

    return (
        <section className='banner-section'>
            <div>
                <Fade cascade damping={1e-1} className='banner-title'>
                    Best food waiting for your belly.
                </Fade>
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