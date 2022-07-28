import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const naviagte = useNavigate();



  const submitData=async()=>{
    console.log(name,price,company,category);

    // getting error in id below is detail
    // VM114:1 Uncaught (in promise) SyntaxError: Unexpected token u in JSON at position 0 at JSON.parse (<anonymous>)


    let userId= JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);


    let result=  await fetch("http://localhost:8000/addProducts",{
      method:"post",
      body:JSON.stringify({name,price,company,category,userId}),
      headers: [["Content-Type", "application/json"]],
    })
    console.log(result);
    result= await  result.json();
    console.log(result);
    naviagte("/");



  }

  return (
    <div>
      <h1>Add Products</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="category"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="company"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input onClick={submitData} type="submit" value="Submit" />
    </div>
  );
};

export default AddProducts;
