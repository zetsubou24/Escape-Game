import React, { useState, useEffect } from "react"
import "./puz5.css"
import { Dropdown } from "semantic-ui-react"

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
	// const [dp1,setDp1]=useState("./waves3_edit.png")
	// const [dp2,setDp2]=useState("./waves2_edit.png")
	// const [dp3,setDp3]=useState("./waves1_edit.png")
	const [height, setHeight] = useState({
		// backgroundImage:`url("./waves3_edit.png")`,
	
	})
	const [height2, setHeight2] = useState({})
	const [height3, setHeight3] = useState({})
	


	const [check, setCheck] = useState(height3.height)
	// useEffect(()=>{
	// 	setHeight({ ...height,backgroundImage: `url(${dp1})`})
	// },[dp1])
	// useEffect(()=>{

	// 	setHeight({ ...height2,backgroundImage: dp2})

	// },[dp2])
	// useEffect(()=>{

	// 	setHeight({ ...height3,backgroundImage: dp3})
		
	// },[dp3])
	function handleClick() {
		let heighto = document.getElementById('water').clientHeight;
		console.log("height1 " + heighto)
		setHeight({ ...height,height: heighto})
	}
	function handleClick2() {
		let heightoo = document.getElementById('water2').clientHeight;
		console.log("height2 " + heightoo)
		setHeight2({ ...height2,height: heightoo })

	}
	function handleClick3() {
		let heightooo = document.getElementById('water3').clientHeight;
		console.log("height3 " + heightooo)
		setHeight3({...height3 ,height: heightooo })

	}
	function reset1() {
		setHeight({})
	}
	function reset2() {
		setHeight2({})
	}
	function reset3() {
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
		
		alert("Correct,Battery will be auto added to your inventory")
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
							<div id="water" style={height} onClick={handleClick}><p style={{ color: "white" }}>H<sub>2</sub></p></div>
						</div>
						<button onClick={reset1} style={{ color: "white" }}>reset</button>
						{/* <div class="ui compact menu">
							<div class="ui simple dropdown item"  >
								Dropdown
								<i class="dropdown icon"></i>
								<div class="menu">
								<div class="item" onClick={(ev)=>setDp1("./waves2_edit.png")}>color 3</div>
								<div class="item" onClick={(ev)=>setDp1("./waves1.png")}>color 2</div>
								<div class="item" onClick={(ev)=>setDp1("./waves3_edit.png")}>color 1</div>
								</div>
							</div>
						</div> */}
						

					</div>
				</td>
				<td>
					<div style={{ width: "200px" }}><h1 style={{ color: "green" }}>+</h1></div>
				</td>
				<td>
					<div id="container">
						<div id="glass2" >
							<div id="water2" style={height2} onClick={handleClick2}><p style={{ color: "red" }}>O<sub>2</sub></p></div>
						</div>
						<button onClick={reset2} style={{ color: "red" }}>reset</button>
						

					</div>
				</td>
				<td>
					<div style={{ width: "250px" }}><h1 style={{ color: "green" }}>=</h1></div>
				</td>
				<td>
					<div id="container">
						<div id="glass3" >
							<div id="water3" style={height3} onClick={handleClick3}><p style={{ color: "blue" }}>H<sub>2</sub>0</p> <hr /></div>
						</div>
						<button onClick={reset3} style={{ color: "blue" }}>reset</button>
					</div>
				</td>
				<td>
					<div style={{ width: "180px" }}><h1 style={{ color: "green" }}>+</h1></div>
				</td>
				<td>
					{((height3.height > 220) && (height3.height < 260) && (height.height / height2.height) >= 1.7 && (height.height / height2.height) < 2.2) && setTimeout(()=>{handleSuccess()},2000)?
						<img src="images/battery.png" alt="battery success"/>
						: null}
				</td>
			</tr>
			<tr><td>
			</td></tr>
		</table>
	)
}