import React ,{useState,useEffect} from "react"
import "./puz5.css"

export default function Puz5(props)
{
	const [height,setHeight]=useState({})
	const [height2,setHeight2]=useState({})
	const [height3,setHeight3]=useState({})
	const [check,setCheck]=useState(height3.height)
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
		
		let cur=Math.min((height.height==undefined?40:height.height)+(height2.height==undefined?20:height2.height),400)
		setHeight3({height:cur})
		setCheck(height3.height*100/400)

		
		
		
		
		
	},[height,height2])
	// useEffect(()=>{
	// 	if(((Math.abs(100-check)<40)&&(height.height/height2.height)>=1.8&&(height.height/height2.height)<2.1))
	// 	setVisible
	// },[check])
	
    return(
        <table>
		<tr>
			<td>
	<div id="scale" style={{height:"400px",width:"20px",color:"red",justifyContent:"space-between"}}>
		<div id="0" style={{height:"80px",textAlign:"left"}}>100</div>
		<div id="1" style={{height:"80px",textAlign:"left"}}>70</div>
		<div id="2" style={{height:"80px",textAlign:"left"}}>50</div>
		<div id="-1" style={{height:"80px",textAlign:"left"}}>40</div>
		<div id="3" style={{height:"80px",textAlign:"left"}}>20</div>
		<div id="4" style={{height:"80px",textAlign:"left"}}>5</div>
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
						<div id="water3" style={height3} onClick={handleClick3}><p style={{color:"blue"}}>H<sub>2</sub>0</p> <hr /></div>
					</div>
					<button onClick={reset} style={{color:"red"}}>reset</button>
				</div>
			</td>
			<td>
			<div style={{width:"180px"}}><h1 style={{color:"red"}}>+{height.height/height2.height}</h1></div>
			</td>
			<td>
				{((Math.abs(100-check)<40)&&(height.height/height2.height)>=1.8&&(height.height/height2.height)<2.1)?<img src="images/battery.png" style={{width:"150px",height:"200px"}}/>:null}
				P
			</td>
		</tr>
		<tr><td>

			{/* <h1 style={{color:"red"}}>{((Math.abs(100-check)<40)&&(height.height/height2.height)>=1.8&&(height.height/height2.height)<2.1)?"correct":null}</h1> */}
			</td></tr>
	</table>
    )
}