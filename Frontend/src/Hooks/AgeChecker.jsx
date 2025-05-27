import React, { useState } from "react";
function AgeChacker(){
   const [age , setAge ] = useState(18);
    return(
        <>
        <div className=" bg-zinc-900 text-white p-50 text-center w-full h-screen">
            <h1 className="text-4xl">{age}</h1>
        <h1 className="text-4xl p-10">{age >= 18 ? "You are eligible to vote." : "You are not eligible to vote"}</h1>
        <button className="bg-red-600 px-5 py-3 border mx-2" onClick={() => setAge(age + 1)}>+</button>
        <button className="bg-red-600 px-5 py-3 border mx-2" onClick={() => setAge(age - 1)}>-</button>
        </div>
        
        </>
    )

}

export default AgeChacker;