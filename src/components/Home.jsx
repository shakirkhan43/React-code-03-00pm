import { useEffect, useState } from "react";
import useDataProfile from "../customHooks/useDataProfile";


const Home = () => {
 const {data }= useDataProfile();
  
  
    return (
      <div>
        <h1>Hello</h1>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    );
  };
  export default Home