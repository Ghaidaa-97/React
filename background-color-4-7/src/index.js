import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';

class App extends  React.Component{

  state={
    color:'white'
  }
onChangeHandler= e => {
  this.setState({
    color:e.target.value
  })
}
  render(){
    
    const styleBG = {
      background : this.state.color
    }
    return(
      <div className='App' style={styleBG}>
        <input type="text" 
        placeholder="Enter a valid color to change BG color" 
        onChange={this.onChangeHandler} 
        value={this.state.color}
        />
      </div>
  )}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
