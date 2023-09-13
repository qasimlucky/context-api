import React from "react";
import HomeContext from "./home-context";

const HomeState = (props) =>{
   const state = {
        name:"Qasim Ali",
        phonenumber : "03497611920"
    } 
    return(
        <HomeContext.Provider value={state}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeState;