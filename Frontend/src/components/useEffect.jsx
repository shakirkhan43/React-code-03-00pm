import { useEffect, useState } from "react";

function UseEffect (){

//     const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count updated:`);
//   }); 

// const [count, setCount] = useState(0);
// useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, [count]);
   // <- add empty brackets here
    // return(
    //     <>
    //   <div>
    //   <h2>Count: {count}</h2>
    //   <button onClick={() => setCount(count + 1)}>+</button>
    // </div>
    //     </>
    // )

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
    return (
        <>
         <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
        </>
    )
}

export default UseEffect;