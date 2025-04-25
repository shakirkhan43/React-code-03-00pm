import { memo } from "react";

function Data({p,onClick}){
    console.log('hyyy');
    
    return(

        <>
        <div onClick={onClick}>
        
        <h1>{p}</h1>
        </div>
        </>
    )
}

export default memo(Data);