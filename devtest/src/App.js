import React  from 'react';
import './App.css';
//import PropTypes from 'prop-types'
import ErrorBund from "./ErrorBund";
//import renderer from 'react-test-renderer';
//import Sum from './components/Sum';
import Zadtwo from './components/zad2';


function App() {

  
  return (
    <div className="App">
     <ErrorBund>
      {/* <Sum /> */}
      <Zadtwo />
     </ErrorBund> 
    </div>
  );
}

export default App;
