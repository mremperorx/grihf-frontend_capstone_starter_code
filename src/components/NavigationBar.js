import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">StayHealthy</h1>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-white" to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link className="text-white" to="/login">Login</Link>
          </li>
          <li className="relative">
            <button
              className="text-white focus:outline-none"
              onClick={toggleDropdown}
            >
              Doctors
            </button>
            
            {dropdownOpen && (
              <ul className="absolute bg-white shadow-lg rounded mt-2">
                <li>
                  <Link className="block px-4 py-2 text-gray-700" to="/doctors">Available Doctors</Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 text-gray-700" to="/specialties">Specialties</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className='text-white' to='/bookanappointment'>Book An Appointment</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
