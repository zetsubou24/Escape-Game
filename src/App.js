import React,{Component,useState,useEffect} from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';
import AppBar from "./Components/AppBar"
import ChatExpansion from "./Components/ChatExpansion"
import Boxes from "./Components/Boxes"
import ProgressBar from "./Components/ProgressBar"
import Scratchpad from "./Components/ScratchPad"
// import AppDragDropDemo from "./Components/app-ours"
import './Game.css';
import Level from "./Components/Level"
import IMage from "./Components/image"
import InventoryFlex from "./Components/InventoryFlex"
// import Image from 'react-bootstrap/Image'


function App() {
  var [level,setLevel]=useState(0)
  var interm="one"
  var [state,setState] = useState({
    tasks: [
        {name:"Battery",category:"game", bgcolor: "yellow",level:"one"},
        {name:"Scrap", category:"game", bgcolor:"pink",level:"one"},
        {name:"Periodic_table ", category:"game", bgcolor:"skyblue",level:"one"}
      ],
      tasks2:[
        {name:"zenbu",category:"game", bgcolor: "yellow",level:"two"},
        {name:"Osaka", category:"game", bgcolor:"pink",level:"two"}
      ]
  })
  var onDragStart = (ev, id,arr) => {
    interm=arr
    console.log(interm)
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }
  var onDragOver = (ev,level) => {
    
    ev.preventDefault();
  }
  var onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    let lev=ev.dataTransfer.getData("level");
    var NextS=[]
    var arr=(lev=="one")?state.tasks:state.tasks2
    arr.map((task) => {
        if (task.name == id) {
            task.category = cat;
            NextS.push(task)
        }
        else
        NextS.push(task)
    });
    if(lev=="one"){
    setState({
        tasks:NextS
    });
  }
  else{
    setState({
      tasks2:NextS
  });
  }
  }
  var [tasks,setTask] = useState({
    game: [],
    inventory: []
  })
  var [tasks2,setTask2] = useState({
    game: [],
    inventory: []
  })
  useEffect((event)=>{
    var f={
    game:[],
    inventory:[]
    }
    var levelo;
    console.log(event)
    var arr;
    if(level==0)
    {

      arr=state.tasks
    }
    else
  {
    arr=(interm=="one")?state.tasks:state.tasks2
  }

    console.log(arr)
    if(arr){
  arr.forEach ((t) => {
    levelo=t.level
    f[t.category].push(
        <div key={t.name}
            onDragStart = {(e) => onDragStart(e, t.name,t.level)}
            draggable
            className="draggable"
            style = {{backgroundColor: t.bgcolor}}
        >
            {t.name}
        </div>
    );
  
    console.log(levelo)
    
    if(levelo=="one"){
    setTask({
      game:f.game,
      inventory:f.inventory
    })

  }
  else
  {
    setTask2({
      game:f.game,
      inventory:f.inventory
    })
  }


  })
}
  },[state,level])


  const handleClick = () =>
  {
    let x=()=>{
      if(level==1)
      return 2
      else
      return 1
    }
    setLevel(x)

  }
  
  // console.log(state.tasks)

  return (
    <div className="App">
      <button onClick={()=>handleClick()}>Change Level </button>
    <AppBar />
        <p>
        Gravity is a 2013 science fiction thriller film directed by Alfonso Cuarón, who also co-wrote, co-edited and produced the film. It stars Sandra Bullock and George Clooney as American astronauts who are stranded in space after the mid-orbit destruction of their Space Shuttle, and attempt to return to Earth.



Cuarón wrote the screenplay with his son Jonás and attempted to develop the film at Universal Pictures. Later, the distribution rights were acquired by Warner Bros. Pictures. David Heyman, who previously worked with Cuarón on Harry Potter and the Prisoner of Azkaban (2004), produced the film with him. Gravity was produced entirely in the United Kingdom, where British visual effects company Framestore spent more than three years creating most of the film's visual effects, which make up over 80 of its 91 minutes.




Gravity opened the 70th Venice International Film Festival on August 28, 2013, and had its North American premiere three days later at the Telluride Film Festival. Upon its release, Gravity was met with widespread critical acclaim, including its direction and visuals. Considered one of the best films of 2013, it appeared on numerous critics' year-end lists, and was selected by the American Film Institute in their annual Movies of the Year list.[5] The film became the eighth highest-grossing film of 2013 with a worldwide gross of over $723 million, against a production budget of around $100 million.
          </p>
          <ProgressBar />
          <div className="grid-container">
          {level?
          <Level  handles={{
            onDragOver:onDragOver,
            onDragStart:onDragStart,
            onDrop:onDrop,
            tasks:tasks
          }}
          /> 
        :
          <Level handles={{
            onDragOver:onDragOver,
            onDragStart:onDragStart,
            onDrop:onDrop,
            tasks:tasks2
          }}/>
        }
          <div className="players">
  <div className="player">Player 1</div>
  <div className="player">Player 2</div>  
  <div className="player">Player 3</div>
  <div className="player">Player 4</div>
  <div className="player">Player 5</div>
  <div className="player">Player 6</div>  
  <div className="player">Player 7</div>
  <div className="player">Player 8</div>
  <div className="player">Player 9</div>
  <div className="player">Player 10</div>  
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

export default App;
