import { useState } from "react";

function EvenOdd(){
    const[count , setCount] = useState(11);

    const Incriment = () => {
        setCount(count + 1);
       }

    return (
        <>
<div className="text-center p-5">
            <h1 className="text-4xl">{count % 2 === 0 ? "Even" : "Odd"}</h1>
            <h1 className="text-4xl">My Counter Value is : {count}</h1>
            <div className="flex justify-center">
            <button className="bg-green-500 px-4 py-2 rounded-md" onClick={Incriment}>Incriment</button>
            </div>
</div>
        </>
    )
}

export default EvenOdd;

// import React, { useState } from "react";

// function EvenOdd() {
//   const [number, setNumber] = useState("");

//   const handleChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const resultText =
//     number === ""
//       ? "Please enter a number"
//       : number % 2 === 0
//       ? "✅ It's an Even Number"
//       : "🔢 It's an Odd Number";

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
//       <div className="bg-zinc-900 shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-6 border border-gray-700">
//         <h1 className="text-4xl font-bold text-blue-400">Even or Odd Checker</h1>

//         <input
//           type="number"
//           value={number}
//           onChange={handleChange}
//           placeholder="Enter a number"
//           className="w-full px-4 py-3 text-lg rounded-xl bg-zinc-800 placeholder-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//         />

//         <p className="text-2xl font-semibold text-yellow-300">{resultText}</p>
//       </div>
//     </div>
//   );
// }

// export default EvenOdd;

