import React from "react"
import "../Kenobi.css"
import "../style.css"
import { Link } from 'react-router-dom';
import {loginExchange,quoteExchange} from "../Globals.js"
const Kenobi = () => {

    console.log("from kenobi",loginExchange.getCredentials())

    const toDis="Astronaut.. can you hear me? Ah. Seems like you're doing okay. Due to some technical error, it seems like you've crash landed. Find your way back to the Home Base. Good luck soldier."
    
    return (
    <div class="container" style={{height:"100vh"}}>
  <img src="images/bg_welcome2.jpg" className="bg_welcome" alt="bg for breifing page"/>
  {/* <div class="kenobi-bottom-left">Please Select your Leader
  </div> */}
  <div class="kenobi-top-left">
    <p style={{color:"red"}}>{toDis}</p><br />
    <p style={{color:"red",fontSize:'40px'}}>Remember this Soldier:</p>
    <p style={{color:"red",fontFamily:'Orbitron',fontSize:'48px'}}> {quoteExchange.getRandomQuote()}</p>
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