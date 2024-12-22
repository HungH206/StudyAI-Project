import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../scripts/firebase-config'; // Adjust the import path as needed
import '../styles/styles.css';

const Header = ({ toggleSlideout }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          StudiWell
        </Link>
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={toggleSlideout}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Menu
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <div className="py-2">
                <Link to="/signup" className="block w-full text-center bg-green-500 text-white px-4 py-2 rounded mb-2">
                  Sign Up
                </Link>
                {auth.currentUser && (
                  <button
                    onClick={() => {
                      signOut(auth);
                      toggleSlideout();
                    }}
                    className="block w-full text-center bg-red-500 text-white px-4 py-2 rounded mb-2"
                  >
                    Sign Out
                  </button>
                )}
                <button onClick={toggleSlideout} className="mt-4 text-gray-600 hover:text-gray-800">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;