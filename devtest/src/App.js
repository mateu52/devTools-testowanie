import React, {useEffect, useState} from 'react';
import './App.css';
import PropTypes from 'prop-types'
import ErrorBund from "./ErrorBund";
function Button(props){
  const [counter, setCounter]= useState(0);
  function handleClick(){
    setCounter(counter+1);
  }
  if(counter===5){
    throw new Error('za duza ilosc');
  }
  return  <button onClick={handleClick}>
              {props.label} {counter}
          </button>
}

function User({firstName,lastName,email  }){
  return(
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>{email}</p>
    </div>
    )
}
User.propTypes = {
  firstName : PropTypes.string.isRequired,
  lastName : PropTypes.string.isRequired,
  email: PropTypes.string
}
function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(response=>response.json())
    .then(data=>setUsers(data.results))
    .catch(error=>console.log(error));
  },[])
  
  return (
    <div className="App">
    <ErrorBund>
    <Button />
      {users && users.map((user)=> 
        <User key={user.login.uuid}
          firstName={user.name.first}
          lastName={user.name.last}
          email={user.email}
        />)}
      
    </ErrorBund>
    </div>
  );
}
Button.defaultProps={
  label: 'OK'
}


export default App;
