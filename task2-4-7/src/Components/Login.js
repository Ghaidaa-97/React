import React,{useState , useContext} from "react";
import { loginContext } from "./context/loginContext";

function Login(){

    const {setUsername , setShowcontent}=useContext(loginContext);

    return(
        <>
            <input type="text"
            placeholder="Username"
            onChange={(e)=>{
                setUsername(e.target.value);
            }} 
            />
            <input type="password"
            placeholder="Password"
            />
            <button onClick={()=>{
                 setShowcontent(true);
            }}>Login</button>
        </>
    );
}

export default Login;