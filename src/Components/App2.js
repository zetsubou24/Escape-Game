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
import Puz1 from '../Test/Puz1'
import Puz8 from "../Test/Puz8"
import Ending from "../Test/Ending"
import FeedBack from "./FeedBack"

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



      </Switch>
    </Router>
  )
}
}
export default App2;