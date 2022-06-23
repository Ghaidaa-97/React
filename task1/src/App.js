import './App.css';
import Nav from "./Components/Nav";
import Title from "./Components/Title";
import P from "./Components/P.js";
import Table from './Components/Table';
import { BrowserRouter as Router , Routes ,Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="container-fluid">
    <Nav/>
    <Router>
    <div></div>
      <Routes>
      <Route path="/about" element={<div>this is about</div>}></Route>
        <Route path="/"></Route>
      </Routes>
        <Title/>
        <P/>
        <Table/>
    </Router>
    </div>
    
  );
}

export default App;
