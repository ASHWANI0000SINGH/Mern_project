import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  const naviagte = useNavigate();
  const auth=localStorage.getItem("user");
useEffect(()=>{
if(auth){
  naviagte("/")
}
},[])


    const submitData= async()=>{
      console.log(email,password);
      let result=  await fetch("http://localhost:8000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
          "Content-Type":"application/json"
        }
      });
      result=  await result.json();
      console.log(result);
      if(result){
        localStorage.setItem("user",JSON.stringify(result));
        naviagte("/")


        // condition is not workinhg here
        // wehen we are trying to put wrong email id and password itsomly says the below
        // Uncaught (in promise) SyntaxError: Unexpected token u in JSON at position 0
      }else{
        alert("hello"); 
      }
      
    }

  return (
    <div>
        <input type="email" name="" id=""  placeholder='email'  
        value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="password" name="" id="" placeholder='password'
        value={password} onChange={(e)=>setPassword(e.target.value)}
        
        />
        <input onClick={submitData} type="submit" value="Submit" />


    </div>
  )
}

export default Login