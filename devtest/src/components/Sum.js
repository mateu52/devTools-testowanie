import React, { useState } from 'react';
import ErrorBund from "../ErrorBund";


function Sum(){
    const [a, setA ]= useState();
    const [b, setB ] = useState();
    const [c, setC] = useState();
    const handleSum=(event)=>{
      event.preventDefault();
      setC(parseInt(a)+parseInt(b));
      console.log({a,b});
      return (
        <h1>{c}</h1>
      )
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
      <div>
      <ErrorBund>
        <form onSubmit={handleSum}>
            <input type="number" name="aaaa" onChange={handleClick} />
            <input type="number" name="bbbb" onChange={handleClick} />
            <input type="submit"  onClick={handleSum}/>
        </form>
        <h2>{c}</h2>
      </ErrorBund>
      </div>
    )
  }
export default Sum;