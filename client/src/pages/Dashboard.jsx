import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import BasicCard from "../components/Card";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
 

export default function Dashboard() {
  const [exercises, setExercises] = useState([]);
  const [loggedName, setLoggedName] = useState("")
  const [greet, setGreet] = useState("")

  function hour(){
    // let hour = new Date("July 21, 1983 1:15:00").getHours()
    let hour = new Date().getHours()
  if(hour>12 && hour<19){setGreet("Good evening")}
  else if(hour<12 && hour>5){setGreet("Good Morning")}
  else if(hour>19){setGreet("Good Night")}
  else if(hour===12){setGreet("Good Afternoon")}
  else if(hour<6){setGreet("It's too late, time for sleep")}
  }

  async function getExercises() {
    const result = await fetch(process.env.REACT_APP_HOST_URL+"/exercise/getexercise", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("Token"),
      },
    });
    const data = await result.json();
    const exercises = data.exercises;
    setLoggedName(data.name);
    console.log(data);
    console.log(exercises);
    setExercises(exercises);
  }
  
  async function onDelete(id){
    
    console.log("this is onDelete id"+id)
    const result = await fetch(process.env.REACT_APP_HOST_URL+"/exercise/"+id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("Token"),
      },
    });
    const data = await result.json();
    const exercises = data.exercises;
    setExercises(exercises);
  }

  useEffect(() => {
    hour();
    getExercises();
  }, []);

  return (
    <div className="dashboard">
      <div className="welcome">
        <Typography
          fontFamily="'Montserrat', sans-serif"
          color="white"
          fontWeight="300"
          variant="h4"
          component="h4"
          mb={1}
        >
          {greet}, <strong>{loggedName}</strong>
        </Typography>
        <Typography
          fontFamily="'Montserrat', sans-serif"
          color="white"
          fontWeight="400"
          variant="p"
          component="p"
          mb={1}
        >
          Track all your exercises and activities and make yourself better and
          healthy.
        </Typography>
      </div>
      <div className="exercises">
        <Typography
          fontFamily="'Montserrat', sans-serif"
          fontWeight="700"
          variant="h5"
          component="h5"
          mb={4}
        >
          All Exercises
        </Typography>
          {!exercises.length ? 
          <div style={{display:"flex", flexDirection:"column", height:"300px" , justifyContent:"center", alignItems:"center"}}>
            
        <Typography
          fontFamily="'Montserrat', sans-serif"
          fontWeight="700"
          variant="h5"
          component="h5"
          mb={1}
        >
          Nothing to show
        </Typography>
        <Typography fontFamily="'Montserrat', sans-serif" fontWeight="400" variant="p" component="p" textAlign="center" mb={2}>Add your first exercise to track and manage your healthy life</Typography>
      <button className='addBtn2'><Link to="/addexercise" className="btnLink">ADD EXERCISE</Link></button>


          </div>
        :
        <Grid container paddingLeft={0} spacing={4}>
        {exercises.map((exercise)=>{
          return(
            <Grid item paddingLeft={0} s={4} key={exercise._id}>
            {console.log(exercise._id)}
            <BasicCard title={exercise.title} des={exercise.des} type={exercise.type} duration={exercise.duration} handleEdit={`/editexercise/${exercise._id}`} handleDelete={()=>{onDelete(exercise._id)}} />
            </Grid>
            )
          })}
          </Grid>
        }
          
      </div>
    </div>
    // <table>
    //   <tbody>
    //     <tr>
    //       <th>S.No</th>
    //       <th>Title</th>
    //       <th>Description</th>
    //       <th>Exercise Type</th>
    //       <th>Duration (in min)</th>
    //     </tr>
    //     {exercises.map((exercise)=>{
    //     return(
    //     <tr key={exercise._id}>
    //       <td>{++count}</td>
    //       <td>{exercise.title}</td>
    //       <td>{exercise.des}</td>
    //       <td>{exercise.type}</td>
    //       <td>{exercise.duration}</td>
    //     </tr>
    //     )
    //   })}
    //   </tbody>
    // </table>
  );
}
