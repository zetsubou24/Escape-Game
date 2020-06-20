import React, { useState, useEffect } from 'react';
import PatternLock from "react-pattern-lock";
import Pattern from "./Pattern"
import "./puz4.css"
function Puz4(props) {
	let level=props.handles.level
	let setLevel=props.handles.setLevel
	let inventory=props.handles.inventory
	let setInventory=props.handles.setInventory
	var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
  const [which,setWhich]=useState(0)
  const [patternState,setPatternState]=useState({
    path: [],
    isLoading: false,
    error: false,
    success: false,
    disabled: false,
    size: 3
  })
  const [path,setPath]=useState([])
  function handleEvent(ev)
  {
    
    console.log(ev.target)
  }
  function handleUp(ev)
  {
    
  }
  function GridCell(props)
{
  // return (<div id={props.id} 
  //           className={c_gridMapCell} 
            
  //           onMouseDown={ handleEvent } 
  //           onMouseUp={handleUp}> 
  //   {value[props.id]}
  // </div>)
}
function reset()
{
  // let vals={}
  // let oppai={}
  // for(let i=1;i<=64;i++){
  // vals[i.toString()]="U"
  // oppai[i.toString()]=0.2
  // }
  // setValue(vals)
  // setOppai(oppai)
}
useEffect(()=>{
  setPatternState({ ...patternState,path:[...path]})
},[path])
let onChange = path => {
  setPatternState({ ...patternState, path: [...path] });
};
let onFinish = () => {
  setPatternState({ ...patternState,isLoading: true });
  // an imaginary api call
  setTimeout(() => {
    if(patternState){
    if (patternState.path.join("-") === "20-15-16-17-12-13-14-9-8-7-6-1") {
      alert("The path is correct and you now have path to the destination")
      setLevel((level+1)%6)
      setPatternState({ ...patternState, isLoading: false, success: true, disabled: true });
    } else {
      setPatternState({...patternState, disabled: true, error: true });
      let errorTimeout = window.setTimeout(() => {
          setPatternState({
            ...patternState,
          disabled: false,
          error: false,
          isLoading: false,
          path: []
        });
      }, 2000);
    }
  }
  }, 1000);
};
let onReset = () => {
  setPatternState({
    ...patternState,
    path: [],
    success: false,
    error: false,
    disabled: false
  });
};
  let gridCells=[]
  for(let i=1;i<65;i++)
  gridCells.push(<GridCell id={i.toString()}/>)
  return (
    <div>
    <div className="puz4-items" style={{backgroundSize:"cover"}}>
    {/* <div>
      <button onClick={()=>setWhich(0)} style={{color:"red"}}>Images</button> &emsp;
      <button onClick={()=>{setWhich(1)}} style={{color:"red"}}>Puzzle</button>
    </div> */}
  
    
    <div style={{width:"40%",height:"80%",backgroundImage:`url('images/mars-map.png')`,backgroundSize:"cover"}} ><PatternLock
    size={5}
    onChange={onChange}
    path={patternState.path}
    error={patternState.error}
    onFinish={onFinish}
    connectorThickness={5}
    disabled={patternState.disabled || patternState.isLoading}
    success={patternState.success}
    
  /></div>
    

    </div>
    <button onClick={reset} style={{color:"blue"}}>Reset</button>
    </div>
    
   
  );
}

export default Puz4;
