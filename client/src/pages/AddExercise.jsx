import React, { useState } from "react";
import { Typography } from "@mui/material";

export default function AddExercise() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await fetch(
        process.env.REACT_APP_HOST_URL + "/exercise/addexercise",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("Token"),
          },
          body: JSON.stringify({
            title: title,
            des: des,
            type: type,
            duration: duration,
          }),
        }
      );
      const data = await result.json();
      alert("Added");
      setTitle("");
      setDes("");
      setType("");
      setDuration("");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="addEx">
      <form className="addform" onSubmit={handleSubmit}>
        <Typography
          fontFamily="'Montserrat', sans-serif"
          color="white"
          fontWeight="700"
          variant="h4"
          component="h4"
        >
          ADD EXERCISE
        </Typography>
        <Typography
          fontFamily="'Montserrat', sans-serif"
          color="white"
          fontWeight="400"
          variant="p"
          component="p"
          mb={4}
        >
          to track and manage your healthy life
        </Typography>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <input
          placeholder="Description"
          value={des}
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <br />
        {/* <input
          placeholder="Type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <br /> */}
        <select
          name="cars"
          id="cars"
          value={type}
          placeholder="Exercise Type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
            <option value="" disabled selected hidden>Choose an exercise type</option>
          <option value="Running">Running</option>
          <option value="Walking">Walking</option>
          <option value="Cycling">Cycling</option>
          <option value="Swimming">Swimming</option>
          <option value="Hiking">Hiking</option>
        </select>
        <br/>
        <input
          placeholder="Duration"
          type="number"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <br />
        <input className="addBtn" type="submit" value="ADD EXERCISE" />
      </form>
    </div>
  );
}
