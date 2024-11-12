 
import './App.css';


import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      count: 0
    };
  }

   
  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

   
  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  
    

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button style={{marginRight:"10px", borderRadius:"5px"}} onClick={this.increment}>Increment</button>
        <button style={{marginRight:"10px", borderRadius:"5px"}} onClick={this.decrement}>Decrement</button>
         
      </div>
    );
  }
}

 


function App() {
  return (
    <div className="App">
      
     <Counter/>
    </div>
  );
}

export default App;
