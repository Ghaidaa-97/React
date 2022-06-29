import JSONDATA from './MOCK_DATA.json'
import './App.css';
import { useState } from 'react';


function App() {
  const [searchTerm , setSearchTerm]= useState("")
  return (
    <div className="App">
      <input type="text" placeholder='Search' onChange={(event) => {setSearchTerm(event.target.value);}}/>
      
      {JSONDATA.filter((val) => {
        if(searchTerm === ""){
          return val
        }
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
        else if(val.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val,key)=>{
        return(
          <div key={key}>{val.first_name} {" "} {val.last_name}</div>
        )
      })}
    </div>
  );
}

export default App;
