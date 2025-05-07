import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Your Name</h2>

        <input
          type="text"
          placeholder="Type your name..."
          value={name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />

        <p className="mt-4 text-lg text-blue-600">
          Your name is: <span className="font-medium">{name}</span>
        </p>
      </div>
    </div>
  );
}

export default NameInput;
