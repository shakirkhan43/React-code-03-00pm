import { useEffect, useState } from "react";
function Effect (){

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log(`Component mounted  ${count}`); 
      }, [count]);
      
    return(

<>

        <div className="flex flex-col items-center justify-center space-y-4 min-h-screen">
            <h1 className="text-4xl font-bold text-blue-600">Count is : {count}</h1>
            <div className="flex space-x-4">
                <button
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white"
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white"
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>
            </div>
        </div>
</>
    

)
}

export default Effect;