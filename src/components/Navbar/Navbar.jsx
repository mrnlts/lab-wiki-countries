import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="p-4 bg-green-600 rounded-lg font-bold text-white text-center mb-5 m-auto w-1/4">
        <Link to="/">WikiCountries</Link>
      </div>
    </nav>
  );
};

export default Navbar;
