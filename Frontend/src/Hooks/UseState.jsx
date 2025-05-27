// import React from 'react'
// import { useState } from 'react'
// const FavoriteColor = () => {
//   const [color, setColor] = useState("red");


// return (
//   <>
//     <h1>My favorite color is {color}!</h1>
//     <button
//       type="button"
//       onClick={() => setColor("blue")}
//     >Blue</button>
//     <button
//       type="button"
//       onClick={() => setColor("red")}
//     >Red</button>
//     <button
//       type="button"
//       onClick={() => setColor("pink")}
//     >Pink</button>
//     <button
//       type="button"
//       onClick={() => setColor("green")}
//     >Green</button>
//   </>
//   )
// }

// export default FavoriteColor

import { useState } from "react";

function FavoriteColor(){

    const [color , setColor] = useState("red")
    return(

        <>
       
       <h1>My favorite color is [{color}]</h1>

        <button 
        type="button"
        onClick={() => setColor("yellow")}
        >
        yellow
        </button>
        <button 
        type="button"
        onClick={() => setColor("blue")}
        >
        Blue
        </button>
        <button 
        type="button"
        onClick={() => setColor("Black")}
        >
        Black
        </button>
        <button 
        type="button"
        onClick={() => setColor("Green")}
        >
        Green
        </button>
        <button 
        type="button"
        onClick={() => setColor("NavyBlue")}
        >
        Navy-Blue
        </button>
        </>
    )
}
export default FavoriteColor;
