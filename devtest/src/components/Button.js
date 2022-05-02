import React, { useState} from 'react';


function Button(props){
    const [counter, setCounter]= useState(0);
    function handleClick(){
      setCounter(counter+1);
    }
    if(counter===5){
      throw new Error('za duza ilosc...');
    }
    return  <button onClick={handleClick}>
                {props.label} {counter}
            </button>
  }
  export default Button;