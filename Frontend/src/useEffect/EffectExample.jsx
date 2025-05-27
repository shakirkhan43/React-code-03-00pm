// import { useEffect, useState } from "react"



// function EffcetExamle(){

// const [count , setCount] = useState(1);


//     useEffect( () => {
//         console.log(`This is useEffect ${count}`);
//     }, [count] );


//     return (
//         <>
//     <h1>Counter value is : {count}</h1>
//     <button className="bg-green-500 px-3 py-1 rounded m-2 " onClick={() => setCount(count * 5)}>Into</button>
//     <button className="bg-red-500 px-3 py-1 rounded " onClick={() => setCount(count / 5)}>Out</button>
//         </>
//     )
// }

// export default EffcetExamle

import { useEffect, useState } from "react";
function EffcetExamle(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`My Component is mounted ${count}`);
    }, [count])
    return(
        <>
        <h1 className="text-4xl text-center">UseEffect</h1>

        <h1 className="text-4xl">Count is : {count}</h1>
        <button className="bg-green-500 px-3 py-1 rounded m-2 " onClick={() => setCount(count + 1)}>Increment</button>
        <button className="bg-red-500 px-3 py-1 rounded " onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default EffcetExamle;