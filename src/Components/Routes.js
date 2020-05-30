import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Kenobi from "./Kenobi";
import Welcome from "./welcome";
import history from './Routes';
import ScratchPad from "./ScratchPad"
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/Kenobi" component={ScratchPad} />
                    
                </Switch>
            </Router>
        )
    }
}