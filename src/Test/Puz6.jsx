import React,{useState,useEffect} from "react"
import "./Puz6.css"
export default function Puz6(props)
{
    let level=props.handles.level
	let setLevel=props.handles.setLevel
	let inventory=props.handles.inventory
	let setInventory=props.handles.setInventory
	var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    const [input1,setInput1]=useState(false)
    const [input2,setInput2]=useState(true)
    const [input3,setInput3]=useState(false)
    const [input4,setInput4]=useState(true)
    const [input5,setInput5]=useState(false)
    const [or1,setOr1]=useState(false)
    const [or2,setOr2]=useState(false)
    const [or3,setOr3]=useState(false)
    const [or4,setOr4]=useState(false)
    const [not,setNot]=useState(false)
    function onPress(ev)
    {
        if(ev.target.id=="1")
        setInput1(!input1)
        if(ev.target.id=="2")
        setInput2(!input2)
        if(ev.target.id=="3")
        setInput3(!input3)
        if(ev.target.id=="4")
        setInput4(!input4)
        if(ev.target.id=="5")
        setInput5(!input5)
    }
    useEffect(()=>{
        setOr1(input1&input2)
        setOr2(input3&input5)
        setOr3(or1&or2)
        setNot(!input4)
        setOr4(not&or3)
    })
    function mouseCoord(event)
    {
        // alert(event.clientX+" "+event.clientY)
    }
    function handleSuccess()
    {

        alert("correct")
		setInventory([...inventory,<div 
			id="pcb"
			key="pcb"
			style={{width: "100px",
					height: "50px",
					backgroundRepeat:"no-repeat",
					backgroundImage:`url(images/videocard.png)`}}
			onDragStart={(e) => onDragStart(e,"pcb")}
			draggable
			></div>])
		setLevel((level+1)%6)
    }
    return (
        <div style={{height:"100%",width:"100%"}}>
        <div className="puz6-container"  onClick={mouseCoord}>
      <div style={{backgroundImage:input1?`url('images/toggle-on.png')`:`url('images/toggle-off.png')`,height:"100px",width:"100px",position:"relative",left:"20px",top:"5px"}}>   
    <button id="1" onClick={onPress} style={{height:"100px",width:"100px"}}></button><br />
    </div>   
    <div style={{backgroundImage:input2?`url('images/toggle-on.png')`:`url('images/toggle-off.png')`,height:"100px",width:"100px",position:"relative",left:"20px",top:"15px"}}>   
    <button id="2" onClick={onPress} style={{height:"100px",width:"100px"}}></button><br />
    </div>   
    <div style={{backgroundImage:input3?`url('images/toggle-on.png')`:`url('images/toggle-off.png')`,height:"100px",width:"100px",position:"relative",left:"20px",top:"25px"}}>   
    <button id="3" onClick={onPress} style={{height:"100px",width:"100px"}}></button><br />
    </div>   
    <div style={{backgroundImage:input4?`url('images/toggle-on.png')`:`url('images/toggle-off.png')`,height:"100px",width:"100px",position:"relative",left:"20px",top:"55px"}}>   
    <button id="4" onClick={onPress} style={{height:"100px",width:"100px"}}></button><br />
    </div>   
    <div style={{backgroundImage:input5?`url('images/toggle-on.png')`:`url('images/toggle-off.png')`,height:"100px",width:"100px",position:"relative",left:"20px",top:"70px"}}>   
    <button id="5" onClick={onPress} style={{height:"100px",width:"100px"}}></button><br />
    </div>   
    
        <div style={{color:"red"}}>
            <div style={{position:"absolute",left:460,top:214}}><div className="output" style={{background:or1==1?"green":"red"}}></div></div><br/>
            <div style={{position:"absolute",left:462,top:464}}><div className="output" style={{background:or2==1?"green":"red"}} ></div></div><br/>
            <div style={{position:"absolute",left:462,top:672}}><div className="output" style={{background:not?"green":"red"}}></div></div><br/>
            <div style={{position:"absolute",left:842,top:321}}><div className="output" style={{background:or3==1?"green":"red"}}></div></div>
            <div style={{position:"absolute",left:852,top:562}}><div className="output" style={{background:or4==1?"green":"red"}}></div></div>
            {or4==1?
            handleSuccess()
            :null}
            <br/>
            </div>
        </div>
        </div>
    )
}