import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="flex h-20 shadow-md px-8 py-5">
      <img src={logo} alt="airbnb" className="max-w-md " />
    </div>
  );
}

export default Navbar;
