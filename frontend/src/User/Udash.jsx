import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Udash() {
    const navigate = useNavigate();
    const validate = async()=>{
        console.log("Validtion");
     const res = await axios.get('https://jwt-backend-wq1j.onrender.com/api/user/val',{  
        // headers:{
        //     "Authorization":localStorage.getItem('token')
        // } 
        withCredentials:true
    });
    console.log(res);
    if(res.data.msg=="success"){
        localStorage.setItem("user",res.data.user.id)
        window.alert("Welcome");
    } 
    else{
        window.alert(res.data.msg || "something went wrong")
        navigate('/log');
    }
    }
    useEffect(()=>{
        validate();
    },[])
  return (
    <div>Udash</div>
  )
}

export default Udash