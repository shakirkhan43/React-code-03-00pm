import React, { useState } from 'react';

function ToggleCard() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md text-center w-80">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Tailwind Toggle Example</h2>
        
        <button
          onClick={() => setShow(!show)}
          className="mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300"
        >
          {show ? "Hide Text" : "Show Text"}
        </button>

        {show && (
          <p className="text-gray-700 mt-2">
             Hello React App! You toggled me using useState + Tailwind!
          </p>
        )}
      </div>
    </div>
  );
}

export default ToggleCard;
