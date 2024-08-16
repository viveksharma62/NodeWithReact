import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';



const AddProduct = () => {

    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const [error,setError]=useState(false);
    const navigate =useNavigate();



    const addProduct=async()=>{

      if(!name || !price || !category || !company){
        setError(true);
        return false;


      }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-type":"application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`

            }
        });
        const data = await result.json();
        if(data){
          navigate('/');
        } else{
            alert("Please enter connect details");
        }

    }

  return (
    <div className='product'>
       <h1>Add Product</h1>
       <input type='text' placeholder='Enter Product Name'  className='inputBox' value={name} onChange={(e)=>setName(e.target.value)}/>
       {error && !name && <span className='invalid-input'>Enter valid name</span>}

       <input type='text' placeholder='Enter Product Price'  className='inputBox' value={price} onChange={(e)=>setPrice(e.target.value)}/>
       {error && !price && <span className='invalid-input'>Enter valid Price</span>}

       <input type='text' placeholder='Enter Product Category' className='inputBox' value={category} onChange={(e)=>setCategory(e.target.value)}/>
       {error && !category && <span className='invalid-input'>Enter valid Category</span>}

       <input type='text' placeholder='Enter Product company' className='inputBox' value={company} onChange={(e)=>setCompany(e.target.value)} />
       {error && !company && <span className='invalid-input'>Enter valid company</span>}

       <button onClick={addProduct} className='appButton'>Add Product</button>


    </div>
  )
}

export default AddProduct
