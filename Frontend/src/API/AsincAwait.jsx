// import { useEffect } from "react";

// function AsincAwait() {
//   useEffect(() => {
//     const fetchData = async () => {

//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
//         const data = await response.json();
//         console.log("Post:", data);
//       } catch (error) {
//         console.error("API Error:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return <h1>Async Await in React</h1>;
// }

// export default AsincAwait;

// import { useEffect, useState } from "react";

// import axios from "axios";
// function AsincAwait(){

//   const [data, setData] = useState([]);

//   useEffect( () => {
//     const fetchData = async () => {
//       try{
//            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");

//             setData(response.data);
//            console.log("data:", response.data);

//       } catch(error){
//         console.error("API Error:", error);

//       }

//     }
//     fetchData();
//   }, [])

//   return(
//     <>
//     <h1>Async Await Function</h1>

//     {data.map((posts) =>
//        (
//         <div key={posts.id} style={{ margin: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
//           <h2>{posts.title}</h2>
//         </div>
//       )
//     )}
//     </>
//   )
// }

// export default AsincAwait;

import { useEffect, useState } from "react";

import axios from "axios";
function AsincAwait() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/"
        );
        setData(response.data);
        console.log("Post:", response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Async Await in React</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default AsincAwait;
