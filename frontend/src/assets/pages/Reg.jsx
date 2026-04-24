import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Reg() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const code = async(e)=>{
        e.preventDefault();
        try{
            const data = {name,email,password}
           const res = await axios.post('http://localhost:5000/api/user',data)
           console.log(res);
           if(res.data.msg=="success"){
           window.alert("Registration successful")
            setName('');
            setEmail('');
            setPassword('');
           }
        }
        catch(error){
            window.alert("Registration Failed")
            console.log(error)
        }
    }
  return (
    <>
    <h4>Registration form</h4>
    <form action="" onSubmit={code}>
        Enter Your Name:
        <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
        <br /><br />
        Enter Your Email:
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br /><br />
        Enter Your Password:
        <input type="password" name="" id=""  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br /><br />
        <input type="submit" value="Register" />
    </form>
    </>
    
  )
}

export default Reg