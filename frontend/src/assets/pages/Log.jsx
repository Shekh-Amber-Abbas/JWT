import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Log() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const logcode = async(e)=>{
        e.preventDefault();
        try{
         const data = {email,password};
        const res = await axios.post('https://jwt-backend-wq1j.onrender.com/api/user/log',data)
        console.table(res);
           if(res.data.msg=="success"){
            window.alert("Login Success")
            localStorage.setItem('token',res.data.token)
            setEmail('');
            setPassword('');
          }
        }
        catch(error){
            window.alert("something went wrong")
        }
        
    }
  return (
    <>
    <h4>Login Page</h4>
    <Link to="/dash">Go to Dashboard</Link>
    <form action="" onSubmit={logcode}>
        Enter Your Email:
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br /><br />
        Enter Your Password:
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br /><br />
        <input type="submit"  value="Login"/>
    </form>
    </>
  )
}

export default Log
