import React, { useState } from "react"
import "../Game.css"
import ModalAlert from "../Components/ModalAlert"

function Puz3(props)
{
	let level=props.handles.level
	let setLevel=props.handles.setLevel
	let inventory=props.handles.inventory
	let setInventory=props.handles.setInventory
	let setHidden1 = props.handles.setHidden1
	let setHidden2 = props.handles.setHidden2
	var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
	var onDrop=props.handles.onDrop
	//modal
    let [modalState,setModalState] = useState({ modalOpen: false })
    let handleOpen = () => setModalState({ modalOpen: true })
    let handleClose = () => setModalState({ modalOpen: false })
    //
	const [visible1,setVisible1]=useState(false)
	const [value,setValue]=useState("")

	function viewSol()
	{
		setVisible1(!visible1)
	}
	function evalVal()
	{
		if(value==="10:24:50")
		{
			// setLevel((level + 1) % 3)
			props.handles.setInventory(
				[
					...inventory,
					<div 
				id={"compass"}
				key={"compass"}
				style={{width: "100px",
						height: "50px",
						backgroundRepeat:"no-repeat",
						backgroundImage:`url('/images/compass2.png')`}}
				onDragStart={(e) => onDragStart(e, "compass")}
				draggable
				></div>
				]
			)
			setTimeout(()=>{
			setLevel((level + 1) % 6)
			setHidden1(true)
			  setHidden2(true)
			},1000)
		}
		else{
			
		}
		setModalState({modalOpen:true})

	}
	let puz3={height:"100%",
	width:"100%",
	display:"flex"}
	function puz3_doc(ev)
	{
		// console.log(ev.target)
		ev.target.src="images/puz3_doc.png"
	}
    return(
        <div style={puz3}>
		
		{visible1?<div id="puz3-box-visible"><input type="text" name="puz3sol" id="puz3sol" class="puz3solution" placeholder="" onChange={(ev)=>setValue(ev.target.value)} value={value}/>
		<button id="puz3but" class="ui red button" style={{height:"40px",display:"flex",alignSelf: "flex-end"}} onClick={evalVal}>Submit</button>
		</div>:null}


		<div className="puz3-items">

			<img src="images/bettercompass.png" className="bomb" onClick={viewSol} alt="compass"/><br />
			<img src="images/pngguru.png" className="bomb2" onClick={puz3_doc} /><br />
			<img src="images/Enchanted_Nether_Star.png" className="star" alt="EASTER EGG"/><br />
		</div>
		<ModalAlert handles={{success:value==="10:24:50",modalState:modalState,setModalState:setModalState,handleOpen:handleOpen,handleClose:handleClose}}/>

		</div>
    )
}
export default Puz3
// style={{backgroundImage: `url('/images/17_27_36.png')`, height: "100vh",width: "100vw", backgroundSize: "cover"}}