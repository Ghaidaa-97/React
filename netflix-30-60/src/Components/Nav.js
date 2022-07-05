import React,{useState} from "react";
import net from "./net.png";



// const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query";


function Nav(){

    // const handleOnSubmit=(e)=>{
    //     e.preventDefault();

    //     fetch(SEARCH_API+searchTerm)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //       console.log(data);
    //       setMovies(data.results);
    //     });
    //   };
    //   const handleOnChange=(e)=>{
    //     setSearchTerm(e.target.value);
    //   }
    // const [searchTerm,setSearchTerm]=useState('');

    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
          <a href="/home" ><img src={net} className="navbar-brand" width="230px" height="90px"/></a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="navbarCollapse1">
              <div className="navbar-nav" style={{fontSize:21,color:'#ffff'}}>
                  <a style={{marginLeft:50}} href="/home" className="nav-item">Home</a>
                  <a style={{marginLeft:20}} href="/about" className="nav-item">About</a>
              </div>
              {/* <form className="d-flex ms-auto" onSubmit={handleOnSubmit}>
                  <input value={searchTerm} onChange={handleOnChange}
                  type="text" className="form-control me-sm-2" placeholder="Search"/>
              </form> */}
          </div>
      </div>
  </nav>

  </>  
  
        
    );
}
export default Nav;