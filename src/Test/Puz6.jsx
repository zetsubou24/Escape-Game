import React,{useState,useEffect} from "react"
import "./Puz6.css"
export default function Puz6(props)
{
    const [input1,setInput1]=useState(false)
    const [input2,setInput2]=useState(false)
    const [input3,setInput3]=useState(false)
    const [input4,setInput4]=useState(false)
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

    return (
        <div className="puz6-container" style={{backgroundImage:`url('images/gates.png')`,height:"100%",width:"100%",backgroundRepeat:"no-repeat"}} onClick={mouseCoord}>
            
            
    <button id="1" onClick={onPress} style={{position:"absolute",left:124,top:380,color:"red"}}>{input1?"on":"off"}</button><br />
    <button id="2" onClick={onPress} style={{position:"absolute",left:124,top:484,color:"red"}}>{input2?"on":"off"}</button><br />
    <button id="3" onClick={onPress} style={{position:"absolute",left:124,top:586,color:"red"}}>{input3?"on":"off"}</button><br />
    <button id="4" onClick={onPress} style={{position:"absolute",left:124,top:690,color:"red"}}>{input4?"on":"off"}</button><br />
    <button id="5" onClick={onPress} style={{position:"absolute",left:124,top:790,color:"red"}}>{input5?"on":"off"}</button><br />
        <div style={{color:"red"}}>
            <div style={{position:"absolute",left:430,top:370}}><div className="output" style={{background:or1==1?"green":"red"}}></div></div><br/>
            <div style={{position:"absolute",left:445,top:561}}><div className="output" style={{background:or2==1?"green":"red"}}></div></div><br/>
            <div style={{position:"absolute",left:500,top:720}}><div className="output" style={{background:not?"green":"red"}}></div></div><br/>
            <div style={{position:"absolute",left:645,top:490}}><div className="output" style={{background:or3==1?"green":"red"}}></div></div>
            <div style={{position:"absolute",left:741,top:665}}><div className="output" style={{background:or4==1?"green":"red"}}></div></div>
            {or4==1?<img src="images/2080ti.png" style={{position:"absolute",left:860,top:620,height:"100px",width:"100px"}}/>:null}
            <br/>
            </div>
        </div>
    )
}