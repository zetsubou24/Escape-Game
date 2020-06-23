import React, { useState, useEffect } from "react"
import "./puz5.css"

export default function Puz5(props) {
	let level = props.handles.level
	let setLevel = props.handles.setLevel
	let inventory = props.handles.inventory
	let setInventory = props.handles.setInventory
	let setHidden1 = props.handles.setHidden1
	let setHidden2 = props.handles.setHidden2
	var onDragOver = props.handles.onDragOver
	var onDragStart = props.handles.onDragStart
	var onDrop = props.handles.onDrop
	const [dp1,setDp1]=useState("")
	const [dp2,setDp2]=useState("")
	const [dp3,setDp3]=useState("")
	const [height, setHeight] = useState({})
	const [height2, setHeight2] = useState({})
	const [height3, setHeight3] = useState({})
	const [check, setCheck] = useState(height3.height)
	const color={
		"images/waves3_edit.png":"white",
		"images/waves2_edit.png":"red",
		"images/waves1_edit.png":"blue"
	}
	useEffect(()=>{
		setHeight({ ...height,backgroundImage: `url(${dp1})`})
	},[dp1])
	useEffect(()=>{
		setHeight2({ ...height2,backgroundImage: `url(${dp2})`})
	},[dp2])
	useEffect(()=>{
		setHeight3({ ...height3,backgroundImage: `url(${dp3})`})
	},[dp3])
	function handleClick() {
		let heighto = document.getElementById('water').clientHeight;
		console.log("height1 " + heighto)
		setHeight({ backgroundImage: `url(${dp1})`,height: heighto})
	}
	function handleClick2() {
		let heightoo = document.getElementById('water2').clientHeight;
		console.log("height2 " + heightoo)
		setHeight2({ backgroundImage: `url(${dp2})`,height: heightoo })

	}
	function handleClick3() {
		let heightooo = document.getElementById('water3').clientHeight;
		console.log("height3 " + heightooo)
		setHeight3({backgroundImage: `url(${dp3})` ,height: heightooo })

	}
	function reset1() {
		setDp1("")
		setHeight({})
	}
	function reset2() {
		setDp2("")
		setHeight2({})
	}
	function reset3() {
		setDp3("")
		setHeight3({})
	}
	useEffect(() => {

		let cur = Math.min((height.height === undefined ? 40 : height.height) + (height2.height === undefined ? 20 : height2.height), 400)
		// setHeight3({height:cur})
		setCheck(height3.height * 100 / 400)
	}, [height, height2])
	// useEffect(()=>{
	// 	if(((Math.abs(100-check)<40)&&(height.height/height2.height)>=1.8&&(height.height/height2.height)<2.1))
	// 	setVisible
	// },[check])
	function handleSuccess() {
		
		alert("Correct.")
		setLevel((level + 1) % 6)
		setHidden1(true)
      setHidden2(true)
		setInventory([...inventory, <div
			id="battery"
			key="battery"
			style={{
				width: "100px",
				height: "50px",
				backgroundRepeat: "no-repeat",
				backgroundImage: `url(images/battery2.png)`
			}}
			onDragStart={(e) => onDragStart(e, "battery")}
			draggable
		></div>])
	}
	return (
		<table>
			<tr>
				<td>
					
				
					<div style={{display:"flex"}}>
					<div class="vl"></div>
					<div id="scale" style={{ height: "400px", width: "20px", color: "green", justifyContent: "space-between" }}>
						<hr style={{width:"1000px"}}></hr>
						<div id="100" style={{ height: "40px", textAlign: "left",fontSize:"65%" }}><hr style={{borderTop:"4px solid green",height: "5px",width:"40px"}}/> &gt;100</div>
						<div id="90" style={{ height: "40px", textAlign: "left",fontSize:"65%" }}><hr style={{borderTop:"3px solid green",height: "5px",width:"15px"}}/></div>
						<div id="80" style={{ height: "40px", textAlign: "left" ,fontSize:"65%" }}><hr style={{borderTop:"4px solid green",height: "5px",width:"40px"}}/>80</div>
						<div id="70" style={{ height: "40px", textAlign: "left",fontSize:"65%" }}><hr style={{borderTop:"3px solid green",height: "5px",width:"15px"}}/></div>
						<div id="60" style={{ height: "40px", textAlign: "left" ,fontSize:"65%" }}><hr style={{borderTop:"4px solid green",height: "5px",width:"40px"}}/>60</div>
						<div id="50" style={{ height: "40px", textAlign: "left",fontSize:"65%" }}><hr style={{borderTop:"3px solid green",height: "5px",width:"15px"}}/></div>
						<div id="40" style={{ height: "40px", textAlign: "left" ,fontSize:"65%" }}><hr style={{borderTop:"4px solid green",height: "5px",width:"40px"}}/>40</div>
						<div id="30" style={{ height: "40px", textAlign: "left",fontSize:"65%" }}><hr style={{borderTop:"3px solid green",height: "5px",width:"15px"}}/></div>
						<div id="20" style={{ height: "40px", textAlign: "left",fontSize:"65%" }}><hr style={{borderTop:"4px solid green",height: "5px",width:"40px"}}/>20</div>
						<div id="10" style={{ height: "40px", textAlign: "left",fontSize:"65%" }}><hr style={{borderTop:"3px solid green",height: "5px",width:"15px"}}/></div>
						<div id="5" style={{ height: "40px", textAlign: "left" ,fontSize:"65%" }}><hr style={{borderTop:"4px solid green",height: "5px",width:"40px"}}/>&lt;10</div>
					</div>
					</div>
				</td>
				<td>&emsp;&emsp;</td>
				<td>
					<div id="container">
						<div id="glass" >
							<div id="water" style={height} onClick={handleClick}><p style={{ color: color[dp1] }}>H<sub>2</sub></p></div>
						</div>
						<button onClick={reset1} style={{ color: color[dp1] }}>reset</button>
						<div class="ui compact menu" style={{marginTop:"20px"}}>
							<div class="ui simple dropdown item"  >
								Fill With
								<i class="dropdown icon"></i>
								<div class="menu">
								<div class="item" onClick={(ev)=>setDp1("images/waves2_edit.png")}><div style={{backgroundColor:"red",width:"15px",height:"15px",border:"2px solid black"}}></div>Red</div>
								<div class="item" onClick={(ev)=>setDp1("images/waves1_edit.png")}><div style={{backgroundColor:"blue",width:"15px",height:"15px",border:"2px solid black"}}></div>Blue</div>
								<div class="item" onClick={(ev)=>setDp1("images/waves3_edit.png")}><div style={{backgroundColor:"#F5F5F5",width:"15px",height:"15px",border:"2px solid black"}}></div>White</div>
								</div>
							</div>
						</div>
						

					</div>
				</td>
				<td>
					<div style={{ width: "200px" }}><h1 style={{ color: "green" }}>+</h1></div>
				</td>
				<td>
					<div id="container">
						<div id="glass2" >
							<div id="water2" style={height2} onClick={handleClick2}><p style={{ color: color[dp2] }}>O<sub>2</sub></p></div>
						</div>
						<button onClick={reset2} style={{ color: color[dp2] }}>reset</button>
						<div class="ui compact menu" style={{marginTop:"20px"}}>
							<div class="ui simple dropdown item"  >
								Fill With
								<i class="dropdown icon"></i>
								<div class="menu">
								<div class="item" onClick={(ev)=>setDp2("images/waves2_edit.png")}><div style={{backgroundColor:"red",width:"15px",height:"15px",border:"3px solid black"}}></div>Red</div>
								<div class="item" onClick={(ev)=>setDp2("images/waves1_edit.png")}><div style={{backgroundColor:"blue",width:"15px",height:"15px",border:"3px solid black"}}></div>Blue</div>
								<div class="item" onClick={(ev)=>setDp2("images/waves3_edit.png")}><div style={{backgroundColor:"white",width:"15px",height:"15px",border:"3px solid black"}}></div>White</div>
								</div>
							</div>
						</div>

					</div>
				</td>
				<td>
					<div style={{ width: "250px" }}><h1 style={{ color: "green" }}>=</h1></div>
				</td>
				<td>
					<div id="container">
						<div id="glass3" >
							<div id="water3" style={height3} onClick={handleClick3}><p style={{ color: color[dp3] }}>H<sub>2</sub>0</p> <hr /></div>
						</div>
						<button onClick={reset3} style={{ color: color[dp3] }}>reset</button>
						<div class="ui compact menu"  style={{marginTop:"20px"}}>
							<div class="ui simple dropdown item"  >
								Fill With
								<i class="dropdown icon"></i>
								<div class="menu">
								<div class="item" onClick={(ev)=>setDp3("images/waves2_edit.png")}><div style={{backgroundColor:"red",width:"15px",height:"15px",border:"3px solid black"}}></div>Red</div>
								<div class="item" onClick={(ev)=>setDp3("images/waves1_edit.png")}><div style={{backgroundColor:"blue",width:"15px",height:"15px",border:"3px solid black"}}></div>Blue</div>
								<div class="item" onClick={(ev)=>setDp3("images/waves3_edit.png")}><div style={{backgroundColor:"white",width:"15px",height:"15px",border:"3px solid black"}}></div>White</div>
								</div>
							</div>
						</div>
					</div>
				</td>
				<td>
					<div style={{ width: "180px" }}><h1 style={{ color: "green" }}>+</h1></div>
				</td>
				<td>
					
					{(color[dp1]==="white")&&(color[dp2]==="red")&&(color[dp3]==="blue")&&((height3.height > 220) && (height3.height < 260) && (height.height / height2.height) >= 1.7 && (height.height / height2.height) < 2.2) && setTimeout(()=>{handleSuccess()},2000)?
						<img src="images/battery.png" alt="battery success"/>
						: null}
				</td>
			</tr>
			<tr><td>
			</td></tr>
		</table>
	)
}