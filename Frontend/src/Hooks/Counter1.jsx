// import React from 'react'
// import { useState } from "react";
// function Counter1(){

import { useState } from "react"

//    const [count , setCount] = useState(0);

//    const Incriment = () => {
//     setCount (count + 1);
//    }

//    const Decrimnet = () => {
//     setCount (count - 1);
//    }
//     return (
//         <>
//                 <h1 style={{textAlign:"center" , padding:"50px"}}>My Counter Value is : {count}</h1>
//                 <div style={{textAlign:"center"}}>
             
  
//                 <button style={{padding:"15px", background:"green", marginRight:"20px"}} onClick={Incriment}>Incriment</button>
//                 <button style={{padding:"15px", background:"red", marginLeft:"20px"}} onClick={Decrimnet}>Decrimnet</button>  
//                 </div>
//                 </>

//     )
// }

// export default Counter1;


function Counter1(){
    const[count , setCount] = useState(0);

    console.log(count);

    // let age = 15;
    // let result =  age>= 18 ? "Adult" : "Minor";
    // console.log(result);  // Output: "Adult"


    const Incriment = () => {
        setCount(count + 1)
    }

    const Decrimnet = () => {
        setCount(count - 1)
    }
    
    
    return(
        <>
        <h1>My Counter Value is : {count}</h1>
        <button className="bg-green-500 px-3 py-1 rounded cursor-pointer" onClick={Incriment}>Incrment</button>
        <button className="bg-green-500 px-3 py-1 rounded cursor-pointer" onClick={Decrimnet}>Decriment</button>

        </>
    )
}
export default Counter1



// Homework : 
// password Hide Show