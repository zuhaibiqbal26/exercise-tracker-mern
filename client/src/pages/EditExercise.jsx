import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
 


export default function EditExercise() {
    const [state, setState] = useState({
        title:'',
        des:'',
        type:'',
        duration:''
    })

    const {id} = useParams()
    // console.log(id)

    async function fetchExercise(id){
        try{
            const result = await fetch(process.env.REACT_APP_HOST_URL+"/exercise/"+id,
            {
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":localStorage.getItem("Token")
                }
            }
            )
            const data = await result.json()
            console.log(data)
            const exercise = data.exercise;
            console.log(exercise)

            setState({
                title:exercise.title,
                des:exercise.des,
                type:exercise.type,
                duration:exercise.duration
             })
        }
        catch(err){
            alert(err.message)
        }
    
}

useEffect(()=>{
    fetchExercise(id)
},[id])

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const result = await fetch(process.env.REACT_APP_HOST_URL+"/exercise/"+id,
            {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":localStorage.getItem("Token")
                },
                body:JSON.stringify({
                    title:state.title,
                    des:state.des,
                    type:state.type,
                    duration:state.duration
                })
            }
            )
            const data = await result.json()
            window.location.replace("/")
            alert("Edited")
        }
        catch(err){
            alert(err.message)
        }
    }

  return (
    <div className='addEx'>

    <form className='addform' onSubmit={handleSubmit}>
    <Typography fontFamily="'Montserrat', sans-serif" color="white" fontWeight="700" variant="h4" component="h4">EDIT EXERCISE</Typography>
        <Typography fontFamily="'Montserrat', sans-serif" color="white" fontWeight="400" variant="p" component="p" mb={4}>to track and manage your healthy life</Typography>
        <input defaultValue={state.title} placeholder='Title' value={state.title} onChange={(e)=>setState({...state, title: e.target.value})} /><br/>
        <input defaultValue={state.des} placeholder='Description' value={state.des} onChange={(e)=>{setState({...state, des: e.target.value})}} /><br/>
        <select
          name="cars"
          id="cars"
          value={state.type}
          placeholder="Exercise Type"
          onChange={(e)=>{setState({...state, type: e.target.value})}}
        >
            <option value="" disabled selected hidden>Choose an exercise type</option>
          <option value="Running">Running</option>
          <option value="Walking">Walking</option>
          <option value="Cycling">Cycling</option>
          <option value="Swimming">Swimming</option>
          <option value="Hiking">Hiking</option>
        </select>
        <br/>
        <input defaultValue={state.duration} placeholder='Duration (in minutes)' type="number" value={state.duration} onChange={(e)=>{setState({...state, duration: e.target.value})}} /><br/>
        <input className='addBtn' type="submit" value="EDIT EXERCISE" />
    </form>
    </div>
  )
}
