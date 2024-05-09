import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const AddProduct = () => {

    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    // const [error,setError]=useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      console.log(params)
      getProductDetails();
    },[]);

    const getProductDetails=async()=>{
      console.log(params);
      let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        headers :{
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      let dt = await result.json();
      setName(dt.name)
      setPrice(dt.price)
      setCategory(dt.category)
      setCompany(dt.company)
    }

    const UpdateProduct =async()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
          method:'put',
          body:JSON.stringify({name,price,category,company}),
          headers :{
            "Content-Type" :"application/json",
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
        let udta = await result.json();
        console.log(udta)
        navigate('/')

    }
    

  return (
    <div className='product'>
       <h1>Update Product</h1>
       <input type='text' placeholder='Enter Product Name'  className='inputBox' value={name} onChange={(e)=>setName(e.target.value)}/>

       <input type='text' placeholder='Enter Product Price'  className='inputBox' value={price} onChange={(e)=>setPrice(e.target.value)}/>

       <input type='text' placeholder='Enter Product Category' className='inputBox' value={category} onChange={(e)=>setCategory(e.target.value)}/>

       <input type='text' placeholder='Enter Product company' className='inputBox' value={company} onChange={(e)=>setCompany(e.target.value)} />

       <button onClick={UpdateProduct} className='appButton'>Update Product</button>
    </div>
  )
}

export default AddProduct