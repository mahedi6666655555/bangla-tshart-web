import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-center pt-5 pb-5'>
                    <Link className=' pl-5' to="/">Home</Link>
                    <Link className=' pl-5' to="/Product">Product</Link>
                    <Link className=' pl-5' to="/Contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;