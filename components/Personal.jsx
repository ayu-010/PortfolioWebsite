import React from 'react';

const Personal = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <h1  className='text-red-900'>Ayush jain</h1>
        <img 
            src="/images/sanchi.jpg"
          alt="Profile" 
          className="w-40 h-40 rounded-full border-4 border-orange-600 shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-50 animate-ping" />
      </div>
    </div>
  );
}

export default Personal;
