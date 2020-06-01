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
const App2 = () => {
//   const {loading} = useAuth0();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/Home" exact component={Kenobi} />
        <Route path="/Home/Assign" exact component={Assign} />
        <Route path="/GamePage" exact component={GamePage} />
        <Route path="/GamePage2" exact component={GamePage2} />
        <Route path="/GamePage3" exact component={GamePage3} />


      </Switch>
    </Router>
  )
}

export default App2;