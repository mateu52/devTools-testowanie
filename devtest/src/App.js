import React  from 'react';
import './App.css';
//import PropTypes from 'prop-types'
import ErrorBund from "./ErrorBund";
//import renderer from 'react-test-renderer';
import Sum from './components/Sum';



function App() {

  
  return (
    <div className="App">
    <ErrorBund>
      <Sum />
    </ErrorBund>
    </div>
  );
}

export default App;
