import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import React,{useState} from "react";
import Profile from './Components/Profile';
import {loginContext} from "./Components/context/loginContext"

function App() {

  const [username , setUsername]=useState("");
  const [showcontent,setShowcontent]=useState(false);
 
 
  return (
    <div className="App">
      <loginContext.Provider value={{username, setUsername , setShowcontent}}>
          {showcontent ? <Profile/> : <Login/>}
      </loginContext.Provider>
    </div>
  );
}

export default App;
