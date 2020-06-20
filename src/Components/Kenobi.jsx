import React from "react"
import "../Kenobi.css"
import "../style.css"
import { Link } from 'react-router-dom';
import {loginExchange,quoteExchange} from "../Globals.js"
const Kenobi = () => {

    console.log("from kenobi",loginExchange.getCredentials())

    const toDis="Hello Astronauts. Can you hear me?Ah. I can hear you and seems like you're doing fine. Due to alien interception a technicalerror occurred and you've crash landed on MARS. You have everything at your disposal in‘planetary approach suit’. By Demystifying, devise your travel & find your way back to thehuman safe ‘Home Base Pod’. Be cognizant about Oxygen supplyand alien attacks. Yoursurvival is paramount to next human generations. Good luck Astronauts !!"
    
    return (
    <div class="container" style={{height:"100vh"}}>
  <img src="images/bg_welcome2.jpg" className="bg_welcome" alt="bg for breifing page"/>
  {/* <div class="kenobi-bottom-left">Please Select your Leader
  </div> */}
  <div class="kenobi-top-left">
    <p style={{color:"black",marginTop:"30px",fontFamily:"Orbitron"}}>{toDis}</p><br />
    <div style={{color:"black",fontSize:'40px',marginBottom:"40px",fontFamily:"Orbitron"}}>Remember this Soldier:</div>
    <div style={{color:"black",fontFamily:'Orbitron',fontSize:'48px'}}> {quoteExchange.getRandomQuote()}</div>
    {/* <p style={{className:'quote'}}> {quoteExchange.getRandomQuote()}</p> */}
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