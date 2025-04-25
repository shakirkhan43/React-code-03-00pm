import React from 'react'
import { useState } from "react";
function Counter1(){

   const [count , setCount] = useState(0);

   const Incriment = () => {
    setCount (count + 1);
   }

   const Decrimnet = () => {
    setCount (count - 1);
   }
    return (
        <>
                <h1 style={{textAlign:"center" , padding:"50px"}}>My Counter Value is : {count}</h1>
                <div style={{textAlign:"center"}}>
             
  
                <button style={{padding:"15px", background:"green", marginRight:"20px"}} onClick={Incriment}>Incriment</button>
                <button style={{padding:"15px", background:"red", marginLeft:"20px"}} onClick={Decrimnet}>Decrimnet</button>  
                </div>
                </>

    )
}

export default Counter1;