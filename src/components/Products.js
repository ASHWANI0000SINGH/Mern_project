import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let products = await fetch("http://localhost:8000/products");
    products = await products.json();
    setProducts(products);
  };

  console.log(products);

  const deleteProduct=async(id)=>{
    console.log(id);
    let result=  await fetch(`http://localhost:8000/products/${id}`,{
      method:"Delete"
    })
    result= await result.json();
    if(result){
      alert("product deleted");
      getProducts();
    }

  }

  const searchApi=async(e)=>{
    let key=(e.target.value);
    if(key){

      let result= await fetch(`http://localhost:8000/search/${key}`);
      result= await result.json();
      console.log(result);
      if(result){
        setProducts(result);
      }
    }else{
      getProducts();
    }

  }

  return (
    <div>
      <input onChange={searchApi} type="search" name="" id="" placeholder="search" />
      


      <h1>Products</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {products.length>0? products.map((item, index) => {
            return(

            <tr key={item._id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td>
                  <button onClick={()=>deleteProduct(item._id)} className="btn btn-danger">Delete</button>  <br /> <br /> 
                  <Link to={`/update/${item._id}`} >Modify</Link>
                
                  </td>

            </tr>
            )


          }): <p> No result found
            
            </p>}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
