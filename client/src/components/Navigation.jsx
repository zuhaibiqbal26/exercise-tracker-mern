import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../media/logo.png";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

export default function Navigation({ login }) {
  return (
    <Box sx={{ display: "flex", width:"275px", backgroundColor:"#F02632", color:"white", position: "fixed", top: 0, left: 0,
    height: "100%"}}>
      <ul style={{textDecoration:"none", listStyle:"none", color:"white !important", padding:"0px 15px"}}>
        <img style={{marginLeft:"30px"}} src={logo} alt="logo"/>
        <li style={{marginTop:"50px"}}><NavLink className='navli' exact to="/" activeClassName="active-link"><DashboardIcon style={{margin:"0px 10px 3px 10px"}}/><span>Dashboard</span></NavLink></li>
        <li style={{marginTop:"10px"}}><NavLink className='navli' to="/addexercise" activeClassName="active-link"><DirectionsRunIcon style={{margin:"0px 10px 3px 10px"}}/><span>Add Exercise</span></NavLink></li>
        <li style={{marginTop:"400px"}}><Link className="navli" onClick={() => {
              localStorage.clear("Token");
              window.location.replace("/login");
            }}><LogoutIcon style={{margin:"0px 15px 3px 10px"}}/><span>Logout</span></Link></li>
      </ul>
      {/* <List>
        <ListItem>

        </ListItem>
        <ListItem>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home"  />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard">
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/addexercise">
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Add Exercise" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link onClick={() => {
              localStorage.clear("Token");
              window.location.replace("/login");
            }}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List> */}
      {/* {login ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/addexercise">Add Exercise</Link>
          <Link
            onClick={() => {
              localStorage.clear("Token");
              window.location.replace("/");
            }}
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )} */}
    </Box>
  );
}
