import { useState } from "react";
function Password(){

    const[showPassword, setShowPassword] = useState(false);
    return(
        <>
        <div className="bg-zinc-900 text-white p-50 text-center w-full h-screen">
            <input 
            className="px-3 py-1 rounded bg-zinc-400"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            />
            <button 
            className="bg-green-500 px-3 py-1 rounded cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
            style={{ marginLeft: "10px" }}
            >
            {showPassword ? "Hide" : "Show"}
            </button>
        </div>
        </>
    )
}


export default Password;