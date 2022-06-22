import './App.css';
import Nav from "./Components/Nav";
import Title from "./Components/Title";
import P from "./Components/P.js";
import Table from './Components/Table';


function App() {
  return (
    <div className="container-fluid">
     <Nav/>
     <Title/>
     <P/>
     <Table/>
    </div>
    
  );
}

export default App;
