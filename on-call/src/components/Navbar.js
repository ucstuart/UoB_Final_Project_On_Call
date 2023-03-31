import React from 'react';
/* import { Margin } from 'react-icons/md'; */
import { Link } from 'react-router-dom';
import logo from './images/logo_1.jpg';

function Navbar() {
  return (
    <nav className="bg-[#641b8f] h-16 flex justify-start items-center">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" width="75px" />
        </Link>
      </div>
      <div className="menu flex-grow">
        <ul className="flex justify-evenly">
          <li className="mr-4">
          <Link to="/" style={{ fontFamily: 'Arial', fontSize: '16px', color: '#FFF0F5' }}>Home</Link>
          </li>
          {/* <li className="mr-4">
            <Link to="/order">Order</Link>
          </li> */}
          <li className="mr-4">
            <Link to="/Review" style={{ fontFamily: 'Arial', fontSize: '16px', color: '#FFF0F5' }}>Reviews</Link>
          </li>
          <li className="mr-4">
            <Link to="/contactUs" style={{ fontFamily: 'Arial', fontSize: '16px', color: '#FFF0F5' }}>Contact Us</Link>
          </li>
          <li className="mr-4">
            <Link to="/basket"style={{ fontFamily: 'Arial', fontSize: '16px', color: '#FFF0F5' }}>Basket</Link>
          </li>
        </ul>
      </div>
      <div className="SignIn">
        <ul className="flex">
          <li>
            <Link to="/SignIn" style={{ fontFamily: 'Arial', fontSize: '16px', color: '#FFF0F5', marginRight: '20px'}}>Sign In</Link>
          </li>
        </ul>
      </div> 
    </nav>
  );
}

export default Navbar;