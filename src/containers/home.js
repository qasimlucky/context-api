import React,{useContext} from "react";
import HomeContext from "../context/home/home-context";


function Home() {
    const msg = useContext(HomeContext)
    console.log(msg)
    return (
        <>
            <div>My name is </div>
            <div style={{border :"2px solid red", height:"20px", width:'200px', color:"red"}}>{msg.name}</div>
        </>

    );
  }
  
  export default Home;