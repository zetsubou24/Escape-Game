import React from 'react';
import MainPage from "./MainPage"
import { Switch, Route, Router } from 'react-router-dom';
import history from "./history"
import Welcome from "./welcome"
import Kenobi from "./Kenobi"
import Assign from "./Assign"

const App2 = () => {
//   const {loading} = useAuth0();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/Home" exact component={Kenobi} />
        <Route path="/Home/Assign" exact component={Assign} />
      </Switch>
    </Router>
  )
}

export default App2;