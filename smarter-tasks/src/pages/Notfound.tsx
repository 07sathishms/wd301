import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center my-10">
      <h2 className="py-2 my-10 text-2xl">404 NOT FOUND</h2>
      <Link
        to="/home"
        id="backToHomeButton"
        className="p-2 m-2 bg-gray-400 rounded text-white hover:bg-gray-800 hover:text-gray-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
