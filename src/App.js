import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';
import AppBar from "./Components/AppBar"
import Expansionpanel from "./Components/Expansionpanel"
function App() {
  return (
    
    <div className="App">
    
    <AppBar />
        {/* <img src="../images/bg1.jpg" className="App-logo" alt="logo" /> */}
        <p>
          Game level description
          </p>
          <div className="grid-container">
          
  <div className="item1">Game</div>
  <div className="item2">Player 1</div>
  <div className="item3">Player 2</div>  
  <div className="item4">Player 3</div>
  <div className="item5">Player 4</div>
  <Expansionpanel />
</div>



        
        
      
    </div>
  );
}

export default App;
