import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import  AddExercise  from "./pages/AddExercise";
import  EditExercise  from "./pages/EditExercise";
import  Dashboard  from "./pages/Dashboard";
import  Home  from "./pages/Home";
import  Login  from "./pages/Login";
import  NotFound  from "./pages/NotFound";
import  Register  from "./pages/Register";
import  Navigation  from "./components/Navigation";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import './index.css';

function App() {

  const [login, setLogin] = useState(false)

  useEffect(()=>{
    const Token = localStorage.getItem("Token")
    if(Token==null){
      setLogin(false)
    }
    else{
      setLogin(true)
    }
  },[])

  return (
      <BrowserRouter>
    <div className="app">
      {/* <Sidebar/> */}

      {login ?
      <>
      <Navigation login={login}/>
      <main className="content">
      {/* <Topbar/> */}
        <Routes>
          {/* <Route path="/" element={<Home/>}></Route> */}
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/addexercise" element={<AddExercise/>}></Route>
          <Route path="/editexercise/:id" exact element={<EditExercise/>}></Route>
          <Route path="/*" element={<NotFound login={login}/>}></Route>
        </Routes>
      </main>
      </>
          :

        <Routes>
          {/* <Route path="/" element={<Home/>}></Route> */}
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/*" element={<NotFound login={login}/>}></Route>
        </Routes>
}
    </div>
      </BrowserRouter>
  );
}

export default App;
