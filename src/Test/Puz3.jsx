import React, { useState } from "react"
import "../Game.css"
function Puz3(props)
{
	let level=props.handles.level
	let setLevel=props.handles.setLevel
	const [visible1,setVisible1]=useState(false)
	const [value,setValue]=useState("")
	function viewSol()
	{
		setVisible1(!visible1)
	}
	function evalVal()
	{
		if(value=="102450"||value=="10:24:50")
		{
			setLevel((level + 1) % 3)
			alert("correct!")
		}
		else{
			alert("wrong!")
		}
	}
	let puz3={height:"100%",
	width:"100%",
	display:"flex"}
    return(
        <div style={puz3}>
		<p style={{color: "yellow",fontSize: "20px"}}>
			People have always been fascinated about time and stars. But unlike on Earth, you live 37 minutes longer on Mars . So, don’t waste that time, those 37 minutes are prime cause the clock that you see ticks the Earth’s time.<br />
			Now talking about stars, isn't it fascinating how tiny they look but are infact huge masses in space??
		</p>
		{visible1?<div id="puz3-box-visible"><input type="text" name="puz3sol" id="puz3sol" class="puz3solution" placeholder="Puzzle3 Solution" onChange={(ev)=>setValue(ev.target.value)} value={value}/>
		<button id="puz3but" class="puz3solution" onClick={evalVal} style={{color:"red"}}> Submit</button></div>:null}
		<div>
			<img src="images/compass.jpg" class="bomb" onClick={viewSol} /><br />
		</div>
		</div>
    )
}
export default Puz3
// style={{backgroundImage: `url('/images/17_27_36.png')`, height: "100vh",width: "100vw", backgroundSize: "cover"}}