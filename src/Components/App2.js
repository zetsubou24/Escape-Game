import React, { Component } from 'react';
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




class App2 extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
 render(){

  return (
    <Router history={history}>
      <div>
        <audio loop className="audio-element">
          {/* <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source> */}
        </audio>
      </div>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/Home" exact component={Kenobi} />
        {/* <Route path="/Assign" exact component={Assign} /> */}
        {/* <Route path="/Intro" exact component={Puzzintro} /> */}
        <Route path="/HomePuzzle" exact component={Puz1} />
        <Route path="/GamePage" exact component={GamePage} />
        <Route path="/GamePage2" exact component={GamePage2} />
        <Route path="/GamePage3" exact component={GamePage3} />
        <Route path="/FinalPuzzle" exact component={Puz8} />
        <Route path="/Ending" exact component={Ending} />
        <Route path="/FeedBack" exact component={FeedBack} />
        <Route path="/Puz6Desc" exact component={Puz6Desc} />
        <Route path="/Puz4Desc" exact component={Puz4Desc} />
        <Route path="/Puz4Desc2" exact component={Puz4Desc2} />






      </Switch>
    </Router>
  )
}
}
export default App2;