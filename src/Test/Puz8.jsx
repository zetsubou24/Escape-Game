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
        console.log(loginExchange.getNickName())
        console.log(ans)
        var x  = document.getElementById("end")
        if(ans == loginExchange.getNickName())
        {
            alert('correct!')
            // setEnding(true)
            window.location.href="/Ending"
        }
        else{
            alert("wrong!")
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
            	<input type="text" id="end" placeholder="Mantra" value={ans} onChange={(ev)=>setAns(ev.target.value)}/>
            </p>
            <p>
                
                <a id = "butt" onClick={checkAns}>
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