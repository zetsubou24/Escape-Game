import React, { Component,useEffect,useState } from 'react';
import Sound from 'react-sound'
import { Switch, Route, Router } from 'react-router-dom';
import history from "./history"
import Welcome from "./welcome"
import Kenobi from "./Kenobi"
import Assign from "./Assign"
import GamePage from "../GamePage"
import GamePage2 from "../GamePage2"
import GamePage3 from "../GamePage3"
import Puzzintro from "./Puzzintro"
import Puz1 from '../Puzzles/Puz1'
import Puz8 from "../Puzzles/Puz8"
import Ending from "../Puzzles/Ending"
import FeedBack from "./FeedBack"
import Puz6Desc from "../Puzzles/Puz6-desc"
import Puz4Desc from "../Puzzles/Puz4-desc"
import Puz4Desc2 from "../Puzzles/Puz4-desc2"




function App2() {
  const [music,setMusic]=useState("/music/music.mp3")
  const [loop,setLoop]=useState(true)
  useEffect(()=>{},[])
  return (
    <Router history={history}>
      <Sound
      url={music}   
      playStatus={Sound.status.PLAYING}
    //   playFromPosition={300}
      loop={loop}
    />
      <Switch>
         {/* <Route path="/Test" render={(props) => <Test handles={{music:music,setMusic:setMusic}} />} /> */}
        <Route path="/" exact render={(props) => <Welcome handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/Home" exact render={(props) => <Kenobi handles={{music:music,setMusic:setMusic}} />} />
        {/* <Route path="/Assign" exact component={Assign} /> */}
        {/* <Route path="/Intro" exact component={Puzzintro} /> */}
        <Route path="/HomePuzzle" render={(props) => <Puz1 handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/GamePage" render={(props) => <GamePage handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/GamePage2" render={(props) => <GamePage2 handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/GamePage3" render={(props) => <GamePage3 handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/FinalPuzzle" render={(props) => <Puz8 handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/Ending" render={(props) => <Ending handles={{music:music,setMusic:setMusic,loop:loop,setLoop:setLoop}} />} />
        <Route path="/FeedBack" render={(props) => <FeedBack handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/Puz6Desc" render={(props) => <Puz6Desc handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/Puz4Desc" render={(props) => <Puz4Desc handles={{music:music,setMusic:setMusic}} />} />
        <Route path="/Puz4Desc2" render={(props) => <Puz4Desc2 handles={{music:music,setMusic:setMusic}} />} />






      </Switch>
    </Router>
  )
}

export default App2;