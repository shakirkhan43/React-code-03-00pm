// import React, { useState } from 'react';

// function BasicForm() {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (event) => {
//     console.log("Event Object:", event);
//     console.log("event.target:", event.target);
//     console.log("event.target.value:", event.target.value);
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Value:", inputValue);
//     alert(`You entered: ${inputValue}`);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-md">
//       <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
//         📝 Basic Form using useState
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <label className="block text-gray-700 font-medium mb-2">
//           Enter Something:
//         </label>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleChange}
//           placeholder="Type here..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           Submit
//         </button>
//       </form>
//       <p className="mt-4 text-gray-600">
//         Current Input: <span className="font-semibold">{inputValue}</span>
//       </p>
//     </div>
//   );
// }

// export default BasicForm;

import { useState } from "react";
function BasicForm() {
  const [inputValue, setInputValue] = useState("");

  const handelChange = (e) => {
    console.log(e.target.value);
       setInputValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:" , inputValue)
    alert(`Your Sumbite value: " ${inputValue}`)
  }
  return (
    <>
      <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          📝 Basic Form using useState
        </h2>

        <form onSubmit={handelSubmit}>
          <label className="block text-gray-700 font-medium mb-2">
            Enter Something:
          </label>

          <input
            // onchange
            type="text"
            value={inputValue}
            onChange={handelChange}
            placeholder="Type here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default BasicForm;
