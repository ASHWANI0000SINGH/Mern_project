import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {
    const auth=localStorage.getItem("user");
    // console.log(JSON.parse(auth));
  return (
    auth?<Outlet/>:<Navigate to="signUp"/>

  )
}

export default PrivateComponent