import React, { useState } from 'react'
import '../index.css';
import background from "../media/bg.png"
import logo from "../media/logo2.png";
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom';
 


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function handleSubmit(e){
        e.preventDefault()

        try{
            const result = await fetch(process.env.REACT_APP_HOST_URL+"/login",
            {

                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            }
                )
                const data = await result.json()
                console.log(data)
                localStorage.setItem("Token", data.Token)

                window.location.replace("/")
        }
        catch(err){
            alert("Invalid Credentials")
        }
    }
  return (
    <div className='login' >
        <div className='contentLogin'>

        <img src={logo} alt="logo"/>
    <form className='form' onSubmit={handleSubmit}>
        <Typography fontFamily="'Montserrat', sans-serif" fontWeight="700" variant="h4" component="h4">LOGIN NOW</Typography>
        <Typography fontFamily="'Montserrat', sans-serif" fontWeight="400" variant="p" component="p" mb={4}>to track and manage your healthy life</Typography>
        <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
        <input type="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
        <input className='formBtn' type="submit" value="LOGIN"/>
        <Typography fontFamily="'Montserrat', sans-serif" fontWeight="400" fontSize="12px" color="#505050" variant="p" component="p" mt={2}>Don’t have an account? <Link to='/register' style={{color:"#000000"}}> Create a new one.</Link></Typography>

    </form>
        </div>
    </div>
  )
}
