import React from 'react'
import { Typography } from '@mui/material'

export default function NotFound({login}) {
  return (
    <>
    {login ? 
      <div style={{display: "flex", flexDirection:"column", height:"100vh", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
      <Typography fontFamily="'Montserrat', sans-serif" fontWeight="700"  color="#F02632" variant="h2" component="h2" mt={2}>PAGE NOT FOUND!</Typography>
      <Typography fontFamily="'Montserrat', sans-serif" fontWeight="500"  color="#F02632" variant="h5" component="h5" mt={2}>DID YOU MAKE A TYPO?</Typography>
      
      </div>
    :
    <div style={{display: "flex", flexDirection:"column", width: "100vw", height:"100vh", justifyContent:"center", alignItems:"center", backgroundColor:"#F02632"}}>
    <Typography fontFamily="'Montserrat', sans-serif" fontWeight="700"  color="white" variant="h2" component="h2" mt={2}>PAGE NOT FOUND!</Typography>
    <Typography fontFamily="'Montserrat', sans-serif" fontWeight="500"  color="white" variant="h5" component="h5" mt={2}>DID YOU MAKE A TYPO?</Typography>
    
    </div>
  }
  </>
  )
}
