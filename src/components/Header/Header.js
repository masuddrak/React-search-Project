import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' text-center my-3 text-xl font-bold'>
            <Link className='mx-5' to='/home'>Home</Link>
            <Link to='/shop'>Shop</Link>
        </nav>
    );
};

export default Header;