import React ,{useState,useEffect} from "react"
import "./puz5.css"

export default function Puz5(props)
{
	const [height,setHeight]=useState({})
	const [height2,setHeight2]=useState({})
	const [height3,setHeight3]=useState({})
	function handleClick()
	{
		let heighto = document.getElementById('water').clientHeight;
		console.log(heighto)
		setHeight({height:heighto})
	}
	function handleClick2()
	{
		let heightoo = document.getElementById('water2').clientHeight;
		console.log(heightoo)
		setHeight2({height:heightoo})
		
	}
	function handleClick3()
	{
		let heightooo = document.getElementById('water3').clientHeight;
		console.log(heightooo)
		setHeight3({height:heightooo})
		
	}
	function reset()
	{
		setHeight({})
		setHeight2({})
		setHeight3({})

	}
	useEffect(()=>{
		// if(height!=={}&&height2!=={}){
		let cur=(height.height==undefined?120:height.height)+(height2.height==undefined?60:height2.height/2)
		setHeight3({height:cur})
		// }
	},[height,height2])
	console.log(height3)
    return(
        <table>
		<tr>
			<td>
	<div id="scale" style={{height:"400px",width:"20px",color:"red"}}>
		<div id="0" style={{height:"50px",textAlign:"left"}}>100</div>
		<div id="1" style={{height:"50px",textAlign:"left"}}>80</div>
		<div id="2" style={{height:"50px",textAlign:"left"}}>60</div>
		<div id="3" style={{height:"50px",textAlign:"left"}}>30</div>
		<div id="4" style={{height:"50px",textAlign:"left"}}>0</div>
		</div>
			</td>
			<td>&emsp;&emsp;</td>
			<td>
				<div id="container">
					<div id="glass" >
						<div id="water" style={height} onClick={handleClick}><p style={{color:"white"}}>H<sub>2</sub></p></div>
					</div>
					<button onClick={reset} style={{color:"red"}}>reset</button>
				</div>
			</td>
			<td>
				<div style={{width:"200px"}}><h1 style={{color:"red"}}>+</h1></div>
			</td>
			<td>
			<div id="container">
					<div id="glass2" >
						<div id="water2" style={height2} onClick={handleClick2}><p style={{color:"orange"}}>O<sub>2</sub></p></div>
					</div>
					<button onClick={reset} style={{color:"red"}}>reset</button>

				</div>
			</td>
			<td>
			<div style={{width:"250px"}}><h1 style={{color:"red"}}>=</h1></div>
			</td>
			<td>
			<div id="container">
					<div id="glass3" >
						<div id="water3" style={height3} onClick={handleClick3}><p style={{color:"blue"}}>H<sub>2</sub>0</p></div>
					</div>
					<button onClick={reset} style={{color:"red"}}>reset</button>
				</div>
			</td>
			<td>
			<div style={{width:"180px"}}><h1 style={{color:"red"}}>+</h1></div>
			</td>
			<td>
				<img src="images/battery.png" style={{width:"150px",height:"200px"}}/>
			</td>
		</tr>
	</table>
    )
}