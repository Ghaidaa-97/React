import React,{useContext} from "react";
import {loginContext} from "../Components/context/loginContext"


function Profile(){

    const{username}=useContext(loginContext);
    return(
    <>
        <h1>this is your profile</h1>
        <h3>User name : {username}</h3>
    </>
    );
}

export default Profile