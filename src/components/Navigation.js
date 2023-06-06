import React from 'react';
import {Link} from 'react-router-dom'
const Navigation = () => {
    return (
            <ul>
                <li><Link to="/">리스트</Link></li>
                <li><Link to="/write">글목록</Link></li>
            </ul>
    );
};

export default Navigation;