import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CategoryLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                color: match ? '#f91944' : 'black',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CategoryLink;