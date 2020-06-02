import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Kenobi from "./Components/Kenobi"
import Welcome from "./Components/welcome"
import Assign from "./Components/Assign"
import App2 from "./Components/App2"
import Puz2 from "./Test/Puz2"


ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

  //  {/* <App2 /> */}
//