import React from 'react';
import './TableBook.css';

const TableBook = () => {
    return (
        <section className='table-book-container'>
            <form className='table-book'>
                <input
                    type="text"
                    className="input"
                    placeholder='Name'
                />

                <input
                    type="email"
                    className="input"
                    placeholder='Email'
                />
                
                <input
                    type="text"
                    className="input"
                    placeholder='Name'
                />

                <input
                    type="email"
                    className="input"
                    placeholder='Email'
                />
            </form>
        </section>
    );
};

export default TableBook;