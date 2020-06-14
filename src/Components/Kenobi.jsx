import React from "react"
import "../Kenobi.css"
import "../style.css"
import { Link } from 'react-router-dom';
import {loginExchange} from "../Globals.js"
const Kenobi = () => {

    console.log("from kenobi",loginExchange.getCredentials())

    const toDis="Hello there. I am Commander Kenobi and I've been told you guys are the best in the business. I have a mission for you to save our fellow astronaut who's stuck on Mars. He needs to find his way to our Home Base Pod. He will need your assistance."
    const assign = () => {
    }
    return (
    <div class="container" style={{height:"100vh"}}>
  <img src="images/bg_welcome2.jpg" className="bg_welcome"/>
  <div class="kenobi-bottom-left">Please Select your Leader
  </div>
  <div class="kenobi-top-left">
    <p style={{color:"red"}}>{toDis}</p><br />
    <p style={{color:"red"}}> But before that please decide who will be the leader among you guys</p>
  </div>
  <div class="kenobi-bottom-right">
    {/* <button name="next" onclick={assign()}>Click to Continue</button> */}
    <Link to="/HomePuzzle">
    <button >Click to Continue</button>
    </Link>
  </div>
  <div class="centered">
    {/* <img src="images/commander.png" /> */}
  </div>
</div>
)

}
export default Kenobi