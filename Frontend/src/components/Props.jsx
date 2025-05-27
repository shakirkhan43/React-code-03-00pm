// import React from 'react'
// import Data from './Data'
// const Props = ({name}) => {

//     const state = "M.P."
//   return (
//     <div>
//       <h1>MY City name is : {name}</h1>

//      <Data value= {state} />
//     </div>
//   )
// }

// export default Props


// import React from 'react'
// import Data from './Data'
// const state = "M.P."
// function Props(value){
//   return (
//     <div>
//       <h1>MY City name is : {value.name}</h1>
//       <h2>Hello, {value.name}!</h2>
//       <p>You are {value.age} years old.</p>
//       <Data value= {state} />
//     </div>
//   )
// }

// export default Props
import Data from './Data'
function Props(props){
  return(
    <>
    {/* <h1>{props.value}</h1> */}
    <Data name={props.value} />
    {/* <h1>Welcome to your name {value.name}</h1>
    <h2>My Age is :  {value.age}</h2>
    <h2>My City is : {value.city}</h2> */}
    {/* <h1> Welcome to {name} <br /> my age is:  {age}  my city is :{city}</h1> */}
  
    </>
  )
}

export default Props;

