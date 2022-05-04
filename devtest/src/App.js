import React, {useEffect, useState} from 'react';
import './App.css';
import PropTypes from 'prop-types'
import ErrorBund from "./ErrorBund";
//import renderer from 'react-test-renderer';
import Button from "./components/Button";

function Sum(){
  const [a, setA ]= useState();
  const [b, setB ] = useState();
  const [c, setC] = useState();
  const handleSum=(event)=>{
    event.preventDefault();
    setC(parseInt(a)+parseInt(b));
    console.log({a,b});
  }
  const handleClick=(event)=> {
    if(event.target.name==="aaaa"){
      setA(event.target.value);
    }
    if(event.target.name==="bbbb"){
      setB(event.target.value);
    }
  }
  return (
    <form onSubmit={handleSum}>
      <input type="number" name="aaaa" onChange={handleClick} />
      <input type="number" name="bbbb" onChange={handleClick} />
      <input type="submit"  onClick={handleSum}/>
    </form>
  )
}

function App() {

  
  return (
    <div className="App">
      {Sum()}
    </div>
  );
}

export default App;
