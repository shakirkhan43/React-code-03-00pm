import { useState, useEffect, useCallback, useMemo } from "react";

import Data from './Data'

function Counter(){

    const[count , setCounts] =  useState(0);

    const Incriment = () =>{
        setCounts(count + 1);
    }


    const Decriment = () => {
        setCounts(count - 1);
    }

    useEffect(()=>{
        console.log('welcome !',count)
    },[]);

    const clickHandlerForChild = useCallback
    (()=>{
        console.log('hii');
    },[])

    const memoHandler = (num)=>{
        console.log("Calculating...");
        // for (let i = 0; i < 10000000; i++) {
        //   num += 1;
        // }
        return num;
    }
    const cal =  memoHandler(count)

    return(

        <>

        <h1>My Counter value is : {count}</h1>
        <h1>My Counter value is : {memoHandler(20)}</h1>
        <h1>My Counter value is : {cal}</h1>
        <div style={{padding:"10px"}}> 


        <button style={{padding:"10px", courser:"pointer", color:"white", marginRight:"10px", border:"1px solid black", background:"green"}} onClick={Incriment}> Incriment</button>
        <button style={{padding:"10px" , courser:"pointer",  color:"white", marginRight:"10px", border:"1px solid black", background:"red"}} onClick={Decriment}> Decriment</button>
        <Data p={"Akash"} onClick={clickHandlerForChild}/>
        </div>
        </>
    )
}
export default Counter;