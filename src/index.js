import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App2 from "./Components/App2"
import Hints from "./Components/Hints"
// import App1 from "./Test/App1"
ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
