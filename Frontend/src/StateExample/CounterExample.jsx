import React, { useState } from 'react';

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Counter App</h2>
        
        <p className="text-4xl font-semibold text-blue-600 mb-4">{count}</p>

        <div className="flex gap-4 justify-center">

        <button
            onClick={() => setCount(count + 1)}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300 cursor-pointer"
          >
            Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300 cursor-pointer"
          >
            Decrement
          </button>

         
        </div>
      </div>
    </div>
  );
}

export default CounterExample;
