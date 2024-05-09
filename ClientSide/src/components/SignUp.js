import React, { useState ,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
    });

    const collectData=async()=>{
        console.log(name,email,password);
        const result = await fetch('http://localhost:5000/register',{
          method:'post',
          body:JSON.stringify( { name, email, password} ),
          headers:{
            'Content-type':'application/json'
          }
        });
        const dta = await result.json()
        console.log(dta);
        localStorage.setItem('user',JSON.stringify(dta.result));
        localStorage.setItem('token',JSON.stringify(dta.auth));
        navigate('/');

    }

  return (
    <div className='register'>
        <h1>Register</h1>
        <input className='inputBox' type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name' />
        <input className='inputBox' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
        <input className='inputBox' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
        <button onClick={collectData} className='appButton' type='button'>Sign Up</button>
    </div>
  )
}

export default SignUp;
