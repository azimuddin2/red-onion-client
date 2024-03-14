import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <p
            className='my-5'
            style={{ color: '#f91944', textAlign: 'center' }}
        >
            error: {message}
        </p>
    );
};

export default ErrorMessage;