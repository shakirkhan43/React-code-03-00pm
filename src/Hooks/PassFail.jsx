import { useState } from "react";
function PassFail(){
    const [marks , setMarks] = useState(30);

    const marksIncrimet = () => {
        setMarks(marks + 1); 
      };

    const marksDecrement = () => {
        setMarks(marks - 1);
    }  
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl mb-4">Marks is: {marks}</h1>
            <h1 className="text-3xl mb-6">{marks >= 33 ? "You are Pass" : "You are Fail"}</h1>
            <div className="space-x-4">
                <button 
                    onClick={marksIncrimet} 
                    className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
                >
                    +
                </button>
                <button 
                    onClick={marksDecrement} 
                    className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
                >
                    -
                </button>
            </div>
        </div>
        </>
    )
}

export default PassFail;