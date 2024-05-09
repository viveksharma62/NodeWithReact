import React from 'react'
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react'

const Login = () => {

    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate =useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
          navigate('/');
        }
      })

    const handleLogin =async()=>{
        console.log(email,password);
        const result = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers: {
                'content-Type':'application/json'
            }
        });
        let data =await result.json();
        console.log(data);
        if(data.auth){
                localStorage.setItem("user",JSON.stringify(data.user));
                localStorage.setItem("token",JSON.stringify(data.auth));
                navigate("/")
        }else{
            alert("Please enter connect details");
        }
    }

  return (
    <div className='login'>
      <h1>Login page</h1>
      <input type='text' className='inputBox' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' className='inputBox' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleLogin}  className='appButton' type='button'>Login</button>

    </div>
  )
}

export default Login
