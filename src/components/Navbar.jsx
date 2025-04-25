import React from 'react'
import useDataProfile from '../customHooks/useDataProfile';

const Navbar = () => {
  const {data }= useDataProfile();

  return (
    <div>
        I am Navbar here...
        {JSON.stringify(data)}
      
    </div>
  )
}

export default Navbar
