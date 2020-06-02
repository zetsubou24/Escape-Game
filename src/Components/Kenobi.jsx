import React from "react"
// import Bg_welcome from "images/bg_welcome.jpg" 
import "../Kenobi.css"
import "../style.css"
// import commander from "images/commander.png"
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Kenobi = () => {
    const toDis="Hello there. I am General Commander Kenobi and I've been told you guys are the best in the business. I have a mission for you to save our fellow astronaut who's stuck on Mars. He needs to find his way to our Home Base Pod. He will need your assistance."
    const assign = () => {
    }
    return (
    <div class="container">
  <img src="images/bg_welcome.jpg" className="bg_welcome"/>
  <div class="kenobi-bottom-left">Please Select your Leader
  </div>
  <div class="kenobi-top-left">
    {toDis}<br />
    <p> But before that please decide who will be the leader among you guys</p>
  </div>
  <div class="kenobi-bottom-right">
    <button name="next" onclick={assign()}>Click to Continue</button>
    <Button as={Link} primary to="Assign">Lets go!</Button>
  </div>
  <div class="centered"><img src="images/commander.png" />
  </div>
</div>
)

}
export default Kenobi