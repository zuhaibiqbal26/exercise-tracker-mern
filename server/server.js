const express = require("express")
const cors = require("cors")
const JWT = require("jsonwebtoken")
const connection = require("./config/dbConfig")
const User = require("./Model/User")
const Exercise = require("./Model/Exercise")

connection()

const SKey = "menhibataunga"

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))


app.use("/exercise",(req,res,next)=>{
    const token = req.headers.authorization

    if(token==null){
        res.status(400).send({message:"login to proceed"})
    }
    else{
        JWT.verify(token,SKey,(err,data)=>{
            if(err){
                res.status(401).send("Permission denied")
            }
            else{
                req.data = data
                next()
            }
        })
    }
})

//for All
app.post("/register", async (req, res)=> {
    const {name, email, password} = req.body
try{
   const result = await User.create({name,email,password})
   const Token = JWT.sign({id:result["_id"]},SKey)
   res.status(200).send({
    message:"Registered successfully",
    user:result,
    Token:Token
   })
}
catch(err){
    res.send("user not created")
}

})

app.post("/login", async (req, res)=> {
    const {email, password} = req.body

    const result = await User.findOne({email, password})

    if(result==null){
        res.status(400).send("Invalid Credentials")
    }
    else{
        const Token = JWT.sign({id:result["_id"]},SKey)
        res.send({Token:Token})
    }
    
})

// app.post("/logout", (req, res)=> {
    
// })


//for Authenticated
app.post("/exercise/addexercise", async (req, res)=> {

    const UserId = req.data.id
    console.log(UserId)
    const {title, des, type, duration} = req.body

    try{
        const result = await Exercise.create({title,des,type,duration})
        await User.findByIdAndUpdate(UserId,{$push:{exercises:result["_id"]}})

        res.send({
            message:"Exercise Added"
        })

    }
    catch(err){
        res.status(400).send({
            message:"Exercise not added",
            Error:err.message
        })
    }
})

app.get("/exercise/getexercise", async (req, res)=> {
    const UserId = req.data.id
    try{
    const result = await User.findById(UserId).populate("exercises")
    console.log(result)

    res.send({
        name: result.name,
        exercises:result.exercises
    })
}
catch(err){
    res.status(400).send({
        message:"Error",
        Error:err.message
    })
}
})

app.get("/exercise/:id", async(req,res)=>{
    const id = req.params.id
    try{

        const exercise = await Exercise.findOne({_id:id})
        res.status(200).json({exercise})
    }
    catch(error){
        res.status(500).json({errors: error, msg: error.message})
    }

})


app.put("/exercise/:id", async(req,res)=>{
    const id = req.params.id; // get the id of the doctor to update from the request parameters
    const {title, des, type, duration} = req.body // get the updated data from the request body
  
    console.log("exercise updation hit")
    // find the doctor to update in the array of doctors
    try {
      const exerciseToUpdate = await Exercise.findByIdAndUpdate(id, {title, des, type, duration}, { new: true });
      res.status(200).json(exerciseToUpdate);
    } catch (err) {
      res.status(500).send('Error updating exercise');
    }
})

app.delete("/exercise/:id", async(req,res)=>{
    const UserId = req.data.id
    await Exercise.findByIdAndDelete(req.params.id).then((exercise) => {
        if (!exercise) {
            return res.status(404).send();
        }
        // res.send(exercise);
        
    }
    
    ).catch((error) => {
        res.status(500).send(error);
    })
    const result = await User.findById(UserId).populate("exercises")
    console.log(result)
        
        res.send({
            name: result.name,
            exercises:result.exercises
        })

})

app.delete("/exercise/exName",(req,res)=>{})

app.listen(5000, ()=>console.log("Server running on port 5000"))

module.exports = app;