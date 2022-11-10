import React from 'react';
import ('./Header.css');

const Header = () => {
    return (
        <nav className='header'>
            <h2>Aam Zonota</h2>
            <div>
            <a href="/home">Home</a>
            <a href="/store">Store</a>
            <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;