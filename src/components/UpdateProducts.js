import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const UpdateProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const naviagte = useNavigate();
  const params = useParams();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:8000/products/${params.id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCompany(result.company);
    setCategory(result.category);
  };

  const submitData = () => {
    console.log(name, price, company, category);
    let result = fetch(`http://localhost:8000/products/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    naviagte("/");
    result = result.json();
    console.log(result);
  };



  
  return (
    <div>
      <h1>Update Products</h1>
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
      <input onClick={submitData} type="submit" value="Modify" />
    </div>
  );
};

export default UpdateProducts;
