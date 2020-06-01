import React, { Component, useState, useEffect } from 'react';
import './App.css';
import AppBar from "./Components/AppBar"
import ChatExpansion from "./Components/ChatExpansion"
import Boxes from "./Components/Boxes"
import ProgressBar from "./Components/ProgressBar"
import Scratchpad from "./Components/ScratchPad"
import './Game.css';
import Level from "./Components/Level"
import IMage from "./Components/image"
import InventoryFlex from "./Components/InventoryFlex"
import Player from "./Components/Player.jsx"
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function GamePage3() {
  var players_available=10
  var max_players=10
  const [level, setLevel] = useState(0)
  const [temp,setTemp]=useState([])
  const [state, setState] = useState({
    tasks: [
      { name: "Plier", category: "game", bgcolor: "yellow", level: "one" },
      { name: "Screwdriver", category: "game", bgcolor: "pink", level: "one" },
      { name: "wires", category: "game", bgcolor: "skyblue", level: "one" }
    ],
    tasks2: [
      { name: "Wire_cutting", category: "game", bgcolor: "yellow", level: "two" },
      { name: "Special items", category: "game", bgcolor: "pink", level: "two" }
    ],
    tasks3: [
      { name: "Compass", category: "game", bgcolor: "yellow", level: "two" },
      { name: "Re-calibrator", category: "game", bgcolor: "pink", level: "two" }
    ]
  })
  
  const [Inventory,setInventory]=useState([])
  const [tasks, setTask] = useState({
    
      game: []
      // inventory: []
    
  })
  const [tasks2, setTask2] = useState({
    game: []
    // inventory: []
  })
  const [tasks3, setTask3] = useState({
    game: []
    // inventory: []
  })


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
    var arr = (level == 1) ? state.tasks : ((level==2)?state.tasks2:state.tasks3)
    arr.map((task) => {
      if (task.name == id) {
        task.category = cat;
        NextS.push(task)
      }
      else
        NextS.push(task)
    });
    if (level == 1) {
      setState({
        ...state,
        tasks: NextS
      });
    }
    else if(level==2){
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
  useEffect(()=>{
      setTemp(Inventory)
      
  },[level])
  useEffect(() => {
    var f = {
      game: [],
      inventory: []
    }
    var arr = (level == 1) ? state.tasks : ((level==2)?state.tasks2:state.tasks3)

    console.log(arr)
    arr.forEach((t) => {
      f[t.category].push(
        <div key={t.name}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );

      if (level == 1) {
        setTask({
          game: f.game
          // inventory: f.inventory
        })

      }
      else if(level==2){
        setTask2({
          game: f.game
          // inventory: f.inventory
        })
      }
      else{
        setTask3({
          game:f.game
        })
      }
      // temp.forEach((t)=>f.inventory.push(t))
      setInventory(f.inventory)
      // setTemp([])
      


    })
  }, [state, level])
  const handleClick = () => {
    setLevel((level + 1) % 3)
    console.log(level)
  }
  let curTask=(level==1)?tasks:((level==2)?tasks2:tasks3)
  return (
    
    <div className="GamePage">
      <AppBar />
      <button onClick={() => handleClick()}>Change Level </button>
      
      <p className="">
        Gravity is a 2013 science fiction thriller film directed by Alfonso Cuarón, who also co-wrote, co-edited and produced the film. It stars Sandra Bullock and George Clooney as American astronauts who are stranded in space after the mid-orbit destruction of their Space Shuttle, and attempt to return to Earth.



        Cuarón wrote the screenplay with his son Jonás and attempted to develop the film at Universal Pictures. Later, the distribution rights were acquired by Warner Bros. Pictures. David Heyman, who previously worked with Cuarón on Harry Potter and the Prisoner of Azkaban (2004), produced the film with him. Gravity was produced entirely in the United Kingdom, where British visual effects company Framestore spent more than three years creating most of the film's visual effects, which make up over 80 of its 91 minutes.




        Gravity opened the 70th Venice International Film Festival on August 28, 2013, and had its North American premiere three days later at the Telluride Film Festival. Upon its release, Gravity was met with widespread critical acclaim, including its direction and visuals. Considered one of the best films of 2013, it appeared on numerous critics' year-end lists, and was selected by the American Film Institute in their annual Movies of the Year list.[5] The film became the eighth highest-grossing film of 2013 with a worldwide gross of over $723 million, against a production budget of around $100 million.
          </p>
      <ProgressBar />
      <div className="grid-container">
        
          <Level handles={{
            onDragOver: onDragOver,
            onDragStart: onDragStart,
            onDrop: onDrop,
            tasks: curTask,
            inventory:Inventory
          }}
          />
        <div className="players">
          {addPlayers()}
        </div>
        {/* <div className="item6"></div> */}
      </div>
      <div></div>
      <div className="footerContainer">
        <ChatExpansion />
        <Scratchpad />
      </div>
    </div>
  );
}

export default GamePage3;
