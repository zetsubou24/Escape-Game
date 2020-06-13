import React, { Component, useState, useEffect } from 'react';

import AppBar from "./Components/AppBar"
import ChatExpansion from "./Components/ChatExpansion"
import ProgressBar from "./Components/ProgressBar"
import Scratchpad from "./Components/ScratchPad"

import './Game.css';
import "./App.css"
import Level3 from "./Components/Level3"
import Player from "./Components/Player.jsx"
import { Link } from 'react-router-dom';


function GamePage3() {
  var players_available=7
  var max_players=10
  const [level, setLevel] = useState(1)
  const [temp,setTemp]=useState([])
  const [success,setSuccess]=useState(-1)

  const [state, setState] = useState({
    
    1: { name: "puzzle_2", category: "game",  description:["Here is another simple puzzle." , "\n" ,"All you have to do is use these pieces of the puzzle and solve it"] },
    2: { name: "puzzle_3", category: "game", description:["This might be a bit tricky.","\n" ," You need to really move around the map for solving this!"]},
    3: { name: "puzzle_4", category: "game", description:["Move a mile straight, then two miles right Repeat this again and go a mile straight Four miles to left, then a mile straight once more That’s how you reach what you are looking for."] },
    4: { name: "puzzle_5", category: "game", description:[" A Chemist once said 'One doesn't simply solve Stoichiometric equations without balancing'. ","\n","Try out the reaction for yourself and see if you can get the output."]},
    5: { name: "puzzle_6", category: "game", description:[" Now let's get our hands dirty with some basics of Electrical engineering. ","\n" ,"You have to find the correct sequence of the logic gate switches to get the output!" ]},
    6: { name: "puzzle_7", category: "game", description:["Wow isn't that rover looking beautiful! Of course it does. It is what is going to take you back to the Home Base! All you need to do is to find out some way to get it running!" ]},
    0: { name: "puzzle_7", category: "game", description:["Wow isn't that rover looking beautiful! Of course it does. It is what is going to take you back to the Home Base! All you need to do is to find out some way to get it running!" ]},
    
  })
  
  const [inventory,setInventory]=useState([])


  const[curDesc,setCurDesc]=useState("")
  //dynamically add players
  const addPlayers=()=>{
    let players=[]
    for(let i=1;i<=players_available&&i<=max_players;i++)
    {
      players.push(<Player number={i} />)
    }
    return players
  }
  
  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }
  var onDragOver = (ev) => {
    ev.preventDefault();
  }

  var onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    var NextS = []
    var arr = (level === 1) ? state.tasks : ((level===2)?state.tasks2:state.tasks3)
    arr.map((task) => {
      if (task.name === id) {
        task.category = cat;
        NextS.push(task)
      }
      else
        NextS.push(task)
    });
    if (level === 1) {
      setState({
        ...state,
        tasks: NextS
      });
    }
    else if(level=== 2){
      setState({
        ...state,
        tasks2: NextS
      });
    }
    else
    {
      setState({
        ...state,
        tasks3:NextS
      })
    }
  }
  
  useEffect(() => {
    // var f = {
    //   curDesc:"",
    //   inventory: []
    // }
    let temp=[]
    state[level].description.forEach(element => {
      if(element=="\n")
        temp.push(<br/>)
      else
      temp.push(element)

    });
    setCurDesc(temp)
    
  }, [state, level ])
  const handleClick = () => {
    setLevel((level + 1) % 6)
  }
  // let curTask=(level=== 1)?tasks:((level=== 2)?tasks2:tasks3)
  let curTask="hmmm"
//   let curDesc=
  return (
    
    <div className="GamePage" style={{backgroundImage: `url("images/bg1.jpg")`}}>
      <AppBar />
      <button onClick={() => handleClick()}>Change Level </button>
      <p className="Game-Level-Description">
       {curDesc}
      </p>
      <ProgressBar />
      <div className="game-grid-container" >
        
          <Level3 handles={{
            onDragOver: onDragOver,
            onDragStart: onDragStart,
            onDrop: onDrop,
            tasks: curTask,
            inventory:inventory,
            setInventory:setInventory,
            level:level,
            setLevel:setLevel,
            success:success,
            setSuccess:setSuccess
          }}
          />
        <div className="players">
          {addPlayers()}
        </div>
        {/* <div className="item6"></div> */}
      </div>
      <div></div>
      {/* <div className="footerContainer">
        <ChatExpansion />
        <Scratchpad />
      </div> */}
    </div>
  );
}
export default GamePage3;
