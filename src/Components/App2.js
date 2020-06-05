import React from 'react';
import MainPage from "./MainPage"
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
const App2 = () => {
//   const {loading} = useAuth0();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/Home" exact component={Kenobi} />
        <Route path="/Assign" exact component={Assign} />
        <Route path="/Intro" exact component={Puzzintro} />
        <Route path="/HomePuzzle" exact component={Puz1} />
        <Route path="/GamePage" exact component={GamePage} />
        <Route path="/GamePage2" exact component={GamePage2} />
        
      </Switch>
    </Router>
  )
}
export default App2;