import React from "react"
import { Link } from 'react-router-dom';
import {loginExchange} from "../Globals.js"
import "./puz8.css"
import { useState } from "react";
export default function Puz8()
{
    const [ans,setAns]=useState("")
    const [ending,setEnding]=useState(false)
    function checkAns(){
        var x  = document.getElementById("end")
        if(x.value.toLowerCase() == loginExchange.getNickName())
        {
            setEnding(true)
        }
    }
    return(
        <div className="puz8-root">
        
            <p class="puz8-top-left">
            You've almost made it astronaut! Just one last puzzle so that you can reach to the Home Base. <br />
            In the most difficult times, it's always a good thing to go back a few steps.<br />
            Try going back a few puzzles and remember what you chose and input it down below.
            </p>
        <form>
            <p style={{alignContent: "center", padding: "0%"}}>
            	<input type="text" id="end" placeholder="Mantra" />
            </p>
            <p>
                
                <a id = "butt" href="/Ending" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Enter
                </a>
                     

            </p>
        </form>
        </div>
    )
}