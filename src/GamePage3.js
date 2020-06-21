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


function GamePage3(props) {
  props.handles.setMusic("/music/alltime.mp3")
  var players_available=7
  var max_players=10
  const [level, setLevel] = useState(4)
  const [temp,setTemp]=useState([])
  const [success,setSuccess]=useState(-1)
  const [hidden1, setHidden1] = useState(true)
  const [hidden2, setHidden2] = useState(true)

  const [state, setState] = useState({
    
    1: { name: "puzzle_2", category: "game",  description:["These seem to be pieces of some picture." , "\n" ,"They fell out of my journal so I think there might be something in this picture that can help me out!","\n","You'll get to see what needs to be detected when everything is arranged." ]
  ,hints:["Puzzle out the pictures in order to find the code. There are two faces for a coin","11-JAN-2030"] ,links:[]},
    2: { name: "puzzle_3", category: "game", description:[""]//People always fascinated with time and stars. Unlike earth, you live 37 minutes longer on MARS. So, don’t waste time, those 37 minutes are prime, because the clock that you see ticks the earth’s time.
    ,hints:["I'll try hovering around things maybe something will pop up. Gold seems to be favourite colour of the astronaut. ","102450"],links:[]},
    3: { name: "puzzle_4", category: "game", description:["\"If you do not change direction, you may end up where you are heading\" Lao Tzu","\n","Move a mile straight, then two miles right. Repeat this again and go a mile straight. Four miles to left, then a mile straight once more. That’s how you reach what you are looking for."
    ] ,hints:["<L_R_1>","<L_R_2>"],links:["/Puz4Desc","/Puz4Desc2"]},
    4: { name: "puzzle_5", category: "game", description:["IF YOU COMBINE 80 UNITS OF HYDROGEN AND THEN OXYGEN UNITS  EQUAL TO HALF THE AMOUNT OF HYDROGEN","\n","THIS REACTION PRODUCES POWER AND THEN WATER UNITS EQUAL TO THE AMOUNT OF OXYGEN PLUS 20 UNITS"
    ],hints:["Use right colours of Water,Hydrogen and Oxygen","80 litres/min H2 40 litres/min O2 and about 60 grams/min H20"],links:[]},
    5: { name: "puzzle_6", category: "game", description:[" This seems to be some sort of device that fell out of the spaceship. ","\n" ,"This seems to be some sort of control system device that fell out of the spaceship suit. Maybe I can learn it for starting my Emergency rover." ]
    ,hints:["Switch on/off the correct switches to start the control system "," Switch 1: On; Switch 2: On; Switch 3: On; Switch 4: Off; Switch 5: On "],links:["/Puz6Desc"]},
    6: { name: "puzzle_7", category: "game", description:["Oh YES! That's the Emergency Rover! ","\n","But it seems to be in unpacked shape" ]
    ,hints:["Assemble the missing parts of the rover","Drag the parts from the inventory and assemble them to the rover at right location"],links:[]},
    0: { name: "puzzle_7", category: "game", description:["Oh YES! That's the Emergency Rover! ","\n","But it seems to be in unpacked shape" ]
    ,hints:["Assemble the missing parts of the rover","Drag the parts from the inventory and assemble them to the rover at right location"],links:[]},
  
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
    
    if(cat=="inventory")
    return;
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
    setHidden1(true)
    setHidden2(true)
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
            setSuccess:setSuccess,
            setHidden1 : setHidden1,
            setHidden2 : setHidden2
          }}
          />
        
      </div>
      <div></div>
      {/* <div className="footerContainer">
        <ChatExpansion />
        <Scratchpad />
      </div> */}
      {/* <button onClick={() => handleClick()}>Change Level </button> */}
      {/* <p className="Game-Level-Description">
       {curDesc}
      </p> */}
      <div style={{display:"flex",width:"100%",flexDirection:"column",fontFamily:"ca"}} className="Game-Level-Description">
        <div style={{display : "flex", flexWrap : "wrap",width:"100%"}} >
          <p style={{color: "black",width:"100%",opacity:1.0,fontSize:"x-large",fontFamily:'Orbitron'}}>
      {curDesc}
      <br/>

		</p>
        </div>
        
          <br/>
          <br/>
          <br/>
          <br/>

          <Hints hidden={hidden1} puzname={state[level].name} hintname="Hint 1" hintdesc={state[level].hints[0]=="<L_R_1>"?
           <Link to={state[level].links[0]} target="_blank" onClick={(event) => {event.preventDefault(); window.open(state[level].links[0]);}} >click here</Link>
           :state[level].hints[0]}/>

          <Hints hidden={hidden2} puzname={state[level].name} hintname="Hint 2" hintdesc={state[level].hints[1]=="<L_R_2>"?
           <Link to={state[level].links[1]} target="_blank" onClick={(event) => {event.preventDefault(); window.open(state[level].links[1]);}} >click here</Link>
           :state[level].hints[1]}/>

          {state[level].links.length>=1&&state[level].hints[0]!="<L_R_1>"?
          <Link to={state[level].links[0]} target="_blank" onClick={(event) => {event.preventDefault(); window.open(state[level].links[0]);}} ><button style={{width:"100px",height:"50px",backgroundColor:"indigo"}}>click here for details</button></Link>
          :null}

          {state[level].links.length==2&&state[level].hints[1]!="<L_R_2>"?
          <Link to={state[level].links[1]} target="_blank" onClick={(event) => {event.preventDefault(); window.open(state[level].links[1]);}} ><button style={{width:"100px",height:"50px",backgroundColor:"indigo"}}>click here for details</button></Link>
          :null}
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
