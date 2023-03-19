import React, { useState } from 'react'
import '../index.css';
import background from "../media/bg.png"
import logo from "../media/logo2.png";
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom';
 


export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await fetch(process.env.REACT_APP_HOST_URL+"/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await result.json()
      localStorage.setItem("Token", data.Token)

      window.location.replace("/")

    } catch (err) {
      alert("error", err.message);
    }
  }

  return (
    <div className='login' >
        <div className='contentLogin'>

        <img src={logo}/>
    <form className='form' onSubmit={handleSubmit}>
        <Typography fontFamily="'Montserrat', sans-serif" fontWeight="700" variant="h4" component="h4">REGISTER NOW</Typography>
        <Typography fontFamily="'Montserrat', sans-serif" fontWeight="400" variant="p" component="p" mb={4}>to track and manage your healthy life</Typography>
      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter password" 
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <input className='formBtn' type="submit" value="REGISTER" />
      <Typography fontFamily="'Montserrat', sans-serif" fontWeight="400" fontSize="12px" color="#505050" variant="p" component="p" mt={2}>Already have an account? <Link to='/' style={{color:"#000000"}}> Login.</Link></Typography>

    </form>
    </div>
    </div>
  );
}
