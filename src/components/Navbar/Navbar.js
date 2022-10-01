import React from 'react';
import logo from '../../images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/logIn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;