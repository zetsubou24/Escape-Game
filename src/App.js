import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';
import AppBar from "./Components/AppBar"
import Expansionpanel from "./Components/Expansionpanel"
import Boxes from "./Components/Boxes"
import ProgressBar from "./Components/ProgressBar"
import Scratchpad from "./Components/ScratchPad"
import AppDragDropDemo from "./Components/app-ours"
function App() {
  return (
    
    <div className="App">
    <AppBar />
        <p>
          Game level description
          </p>
          <ProgressBar />
          <div className="grid-container">
          
          <div className="item1">Game
            <div className="sub-grid-container">
              <AppDragDropDemo />
            {/* <div className="sub-grid-item1">
            INVENTORY
            </div> */}
            </div>
          </div>
  <div className="item2">Player 1</div>
  <div className="item3">Player 2</div>  
  <div className="item4">Player 3</div>
  <div className="item5">Player 4</div>
  {/* <div className="item6"><Expansionpanel /></div> */}
  {/* <div className="item7">Inventory</div> */}

  <Expansionpanel /> <Scratchpad />
</div>
    </div>
  );
}

export default App;
