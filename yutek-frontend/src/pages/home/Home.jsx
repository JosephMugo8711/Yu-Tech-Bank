import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroBackground = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=webaliser-_TPTXZd9mOo-unsplash.jpg';

  return (
    <div
      className='flex flex-row  justify-center items-center'
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '80vh',
      }}
    >
      <div className="flex-1 p-12 pr-12">
        <h1 className='text-4xl text-black font-bold'>Welcome to our Real Estate Website</h1>
        <p className='text-black mt-4'>Find your dream home today</p>
        <div className="mt-4">
          <Link
            to="/get-started"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="flex-2"></div>
    </div>
  );
};

export default Home;



