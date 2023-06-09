import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import logo from "../media/logo.png";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

export default function Navigation({ isOpen }) {
  return (
    // <Box className="navigation">

    //   <ul style={{textDecoration:"none", listStyle:"none", color:"white !important", padding:"0px 15px"}}>
    //     <img style={{marginLeft:"30px"}} src={logo} alt="logo"/>
    //     <li style={{marginTop:"50px"}}><NavLink className='navli' exact="true" to="/" activeclassname="active-link"><DashboardIcon style={{margin:"0px 10px 3px 10px"}}/><span>Dashboard</span></NavLink></li>
    //     <li style={{marginTop:"10px"}}><NavLink className='navli' to="/addexercise" activeclassname="active-link"><DirectionsRunIcon style={{margin:"0px 10px 3px 10px"}}/><span>Add Exercise</span></NavLink></li>
    //     <li style={{marginTop:"400px"}}><Link className="navli" onClick={() => {
    //           localStorage.clear("Token");
    //           window.location.replace("/");
    //         }}><LogoutIcon style={{margin:"0px 15px 3px 10px"}}/><span>Logout</span></Link></li>
    //   </ul>

    // </Box>
    <div className={isOpen ? "sidebar sidebar--open" : "sidebar"}>
      
        <img style={{margin:"20px 30px"}} src={logo} alt="logo"/>


      <NavLink
          className="navli"
          exact="true"
          to="/"
          activeclassname="active-link"
        >
      <li>
        <DashboardIcon />
        Dashboard
      </li>
        </NavLink>
        <NavLink
          className="navli"
          to="/addexercise"
          activeclassname="active-link"
        >

      <li>
        <DirectionsRunIcon />
        Add Exercise
      </li>
        </NavLink>
        <Link
          className="navli"
          onClick={() => {
            localStorage.clear("Token");
            window.location.replace("/");
          }}
        >
      <li style={{ marginTop: "400px" }}>
          <LogoutIcon style={{ margin: "0px 15px 3px 10px" }} />
          <span>Logout</span>
      </li>
        </Link>
    </div>
  );
}
