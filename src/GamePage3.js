import React, { Component, useState, useEffect } from 'react';

import Hints from "./Components/Hints"


import AppBar from "./Components/AppBar"
import ChatExpansion from "./Components/ChatExpansion"
import ProgressBar from "./Components/ProgressBar"
import Scratchpad from "./Components/ScratchPad"

import './Game.css';
import "./App.css"
import Level3 from "./Components/Level3"
import Player from "./Components/Player.jsx"
import { Link } from 'react-router-dom';
import { Button, Input } from "semantic-ui-react"


function GamePage3() {
  var players_available=7
  var max_players=10
  const [level, setLevel] = useState(1)
  const [temp,setTemp]=useState([])
  const [success,setSuccess]=useState(-1)
  const [hidden1, setHidden1] = useState(true)
  const [hidden2, setHidden2] = useState(true)

  const [state, setState] = useState({
    
    1: { name: "puzzle_2", category: "game",  description:["These seem to be pieces of some picture." , "\n" ,"They fell out of my journal so I think there might be something in this picture that can help me out!","\n","You'll get to see what needs to be detected when everything is arranged." ]
  ,hints:["Puzzle out the pictures in order to find the code. There are two faces for a coin","11-JAN-2030"] },
    2: { name: "puzzle_3", category: "game", description:["People always fascinated with time and stars. Unlike earth, you live 37 minutes longer on MARS. So, don’t waste time, those 37 minutes are prime, because the clock that you see ticks the earth’s time."]
    ,hints:["I'll try hovering around things maybe something will pop up. Yellow seems to be favourite colour of the astronaut. ","102450"]},
    3: { name: "puzzle_4", category: "game", description:["\"If you do not change direction, you may end up where you are heading\" Lao Tzu","\n","Move a mile straight, then two miles right. Repeat this again and go a mile straight. Four miles to left, then a mile straight once more. That’s how you reach what you are looking for."
    ] ,hints:["Start from the bottom left. Hyperlink to Map ","<hyperlink>"]},
    4: { name: "puzzle_5", category: "game", description:["I seem to have made it to the Chemistry lab of the space ship'. ","\n","I think I can work my way around here and get something useful!","\n","Fuel Cell reaction: 2H2 + O2 → 2H2O + electricity","\n"
    ],hints:["Use right colours of Water,Hydrogen and Oxygen","80l/min H2 40l/min O2 and 32g/min H20"]},
    5: { name: "puzzle_6", category: "game", description:[" This seems to be some sort of device that fell out of the spaceship. ","\n" ,"This seems to be some sort of control system device that fell out of the spaceship suit. Maybe I can learn it for starting my Emergency rover." ]
    ,hints:["Switch on/off the correct switches to start the control system "," Switch 1: On; Switch 2: On; Switch 3: On; Switch 4: Off; Switch 5: On "]},
    6: { name: "puzzle_7", category: "game", description:["Oh YES! That's the Emergency Rover! But it seems to be in quite a bad shape. Maybe the items I found earlier can be helpful here!" ]
    ,hints:["Assemble the missing parts of the rover","Drag the parts from the inventory and assemble them to the rover at right location"]},
    0: { name: "puzzle_7", category: "game", description:["Oh YES! That's the Emergency Rover! But it seems to be in quite a bad shape. Maybe the items I found earlier can be helpful here!" ]
    ,hints:["Assemble the missing parts of the rover","Drag the parts from the inventory and assemble them to the rover at right location"]},
  
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
    
    <div className="GamePage" style={{backgroundImage: `url("images/mars1.jpg")`}}>
      <AppBar />
      <ProgressBar value={level} />
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
        
      </div>
      <div></div>
      {/* <div className="footerContainer">
        <ChatExpansion />
        <Scratchpad />
      </div> */}
      <button onClick={() => handleClick()}>Change Level </button>
      {/* <p className="Game-Level-Description">
       {curDesc}
      </p> */}
      <div style={{display:"flex",width:"100%",flexDirection:"column",fontFamily:"ca"}} className="Game-Level-Description">
        <div style={{display : "flex", flexWrap : "wrap",width:"100%"}} >
          <p style={{color: "blue",width:"100%",opacity:1.0,fontSize:"x-large"}}>
      {curDesc}
      <br/>

		</p>
        </div>
        {/* <div style={{alignItems:"center",width:"100%",opacity:1.0}}>
          <Button primary >Hint 1</Button>
          <Button secondary>Hint 2</Button>

          </div> */}
          <br/>
          <br/>
          <br/>
          <br/>

          <Hints hidden={hidden1} puzname={state[level].name} hintname="Hint 1" hintdesc={state[level].hints[0]}/>
          <Hints hidden={hidden2} puzname={state[level].name} hintname="Hint 2" hintdesc={state[level].hints[1]}/>

          <div style={{height:"8vh"}}>
          <Button primary onClick = {() => {
            setHidden1(!hidden1)
            setHidden2(true)
        }}>Hint 1</Button>
        <Button secondary onClick = {() => {
            setHidden2(!hidden2)
            setHidden1(true)
        }}>Hint 2</Button>
        </div>
      </div>
    </div>
  );
}
export default GamePage3;
