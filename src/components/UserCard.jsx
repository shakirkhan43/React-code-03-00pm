import React from 'react'

const UserCard = ({name, age, location, image}) => {
  return (
    <>
    <div style={{
        border:"1px solid black",
        padding:"10px",
        margin:"10px",
        borderRadius:"10px",
        width:"250px"
      }}>
<img src={image} alt={name} style={{width:"100%", borderRadius:"10px"}} />
<h1>{name}</h1>
<p>Age : {age}</p>
<p>{location}</p>

    </div>
    </>
  )
}

export default UserCard

// {name,age,location,image}
{/* <div style={{
      border:"1px solid black",
      padding:"10px",
      margin:"10px",
      borderRadius:"10px",
      width:"250px"
    }}>
     <img src={image} alt={name}  style={{borderRadius:"10px", width:"100%"}}/>
      <h2>{name}</h2>
      <p>Age : {age}</p>
      <p>{location}</p>
    </div> */}