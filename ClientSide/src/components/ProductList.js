import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const ProductList = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getProducts();

    },[])

    const getProducts=async()=>{
        let result = await fetch('http://localhost:5000/product',{
          headers :{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
        
        const data = await result.json();
        setProducts(data);
    }

    const DeleteProduct =async(id)=>{
        const result = await fetch(`http://localhost:5000/product/${id}`,{
          method:'Delete',
          headers :{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
        let dta = await result.json();
        if(dta){
          alert("record is delete")
          getProducts();
        }
    }

    const searchHandle =async(event)=>{
     let key = event.target.value
     if(key){
     let result = await fetch(`http://localhost:5000/search/${key}`,{
      headers :{
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });

     let sdata = await result.json();
     if(sdata){
      setProducts(sdata);
     }
    }
    else{
      getProducts();
    }
    }

  return (
    <div className='product-list'>
      <h3>Product List</h3>
      <input type='text' placeholder='Search Product' className='search-product-box' onChange={searchHandle} />
      <ul>
         <li>S. No</li>
         <li>Name</li>
         <li>Price</li>
         <li>Category</li>
         <li>Operation</li>
      </ul>
      {
       products.length>0 ? products.map((item,index)=>
      <ul key={item.id}>
         <li>{index+1}</li>
         <li>{item.name}</li>
         <li>₹{item.price}</li>
         <li>{item.category}</li>
         <li><button onClick={()=>DeleteProduct(item._id)}>Delete</button>
         <Link to={'/update/'+item._id}><button style={{marginLeft:"10px"}}>update</button></Link>
         </li>
      
      </ul>
        )
        : <h1>No Result Found</h1>
      }
    </div>
  )
}

export default ProductList;
