import React from "react"
import "../Kenobi.css"
import "../style.css"
import { Link } from 'react-router-dom';
import {loginExchange,quoteExchange} from "../Globals.js"
import Sound from 'react-sound'
import Soundo from "./Soundo"
import { Button, Icon } from 'semantic-ui-react'
const Kenobi = () => {

    console.log("from kenobi",loginExchange.getCredentials())

    const toDis="Hello, Astronaut. We haven’t received any of your messages. Hope you’re doing fine. Due to an alien interception, you’ve crash landed on MARS. There’s a technical error in the controlling system, allowing communication to happen only one way. Decode the alien locked essentials and devise your EMERGENCY ROVER to find your way back to the HOME BASE POD. Be cognizant about limited oxygen availability and alien attacks. Your survival is of paramount importance for posterity. Good luck, Astronauts!!"
    
    return (
    <div class="container" style={{height:"100vh"}}>
  <img src="images/bg_welcome2.jpg" className="bg_welcome" alt="bg for breifing page"/>
  {/* <div class="kenobi-bottom-left">Please Select your Leader
  </div> */}
  <div class="kenobi-top-left">
    <p style={{color:"black",marginTop:"30px",fontFamily:"Orbitron"}}>{toDis}</p><br />
    <div style={{color:"black",fontSize:'40px',marginBottom:"40px",fontFamily:"Orbitron"}}>Remember this Astronaut:</div>
    <div style={{color:"black",fontFamily:'Orbitron',fontSize:'48px'}}> {quoteExchange.getRandomQuote()}</div>
    {/* <p style={{className:'quote'}}> {quoteExchange.getRandomQuote()}</p> */}
  </div>
  <div class="kenobi-bottom-right">
    {/* <button name="next" onclick={assign()}>Click to Continue</button> */}
    <Link to="/HomePuzzle">
    <Button icon labelPosition='right'>
      Click to continue
      <Icon name='right arrow' />
    </Button>
    </Link>
  </div>
  <div class="centered">
    {/* <img src="images/commander.png" /> */}
  </div>
  {/* <Sound
      url="/music/music.mp3"
      playStatus={Sound.status.PLAYING}
      // playFromPosition={300}
    //   loop={true}
      
    /> */}
	{/* <Soundo /> */}

</div>
)

}
export default Kenobi