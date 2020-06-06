import React ,{useState} from "react"
import { Link } from 'react-router-dom';

export default function Puz1()
{
    const [ans,setAns]=useState("")
    const [nextlevel,setNextLevel]=useState(false)
    function puzz1()
    {
        if(ans=="1234"){
        setNextLevel(true)
        alert("correct! click on 'continue to next level' button below  to proceed  ")
        }
        else{
        alert("wrong! ")
        }

    }
    return (
        <div style={{backgroundImage:`url("images/bg_welcome2.jpg")`,width:"100%",height:"100vh"}} usemap="#p1intro">
            {/* <img src="images/bg_welcome2.jpg" alt="stuck_on_mars" style={{width:"100%"}} usemap="#p1intro" / > */}
	<div class="top-left">
		<p style={{color: "blue"}}>
        &emsp; &emsp; &emsp; &emsp; Solve the riddle below to ascertain the value of gravity on the planet.<br /><br />
			&emsp; &emsp; &emsp; &emsp; "Savita Yantraih Prithiveem  Aramnaat Dyaam Andahat  Atoorte Baddham Ashwam Iv Adhukshat – चतुःशत Gurutvakarshan
"
		</p>
		
	</div>
	<div class="centered">
		<img src="/images/puzz1.png" style={{width: "100%" }}/>
        <p>
			<input type="text" name="puzz1sol" id="puzz1sol" value={ans} onChange={(ev)=>setAns(ev.target.value)}/><br />
			<button 
				id="submitbutton" 
            	type="button" 
            	onClick={puzz1}>Submit
            </button>
            {nextlevel?
            <Link to="/Assign">
            <button >
                continue to next level
            </button></Link>:null
            }
		</p>
	</div>
	<div class="bottom-cent">
		
	</div>
        </div>
    )
}
