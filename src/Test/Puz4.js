import React, { useState, useEffect } from 'react';
import PatternLock from "react-pattern-lock";
import Pattern from "./Pattern"
function Puz4(props) {
  let level=props.level
  let setLevel=props.setLevel
  const [which,setWhich]=useState(0)
  const [patternState,setPatternState]=useState({
    path: [],
    isLoading: false,
    error: false,
    success: false,
    disabled: false,
    size: 5
  })
  const [path,setPath]=useState([])
  let c_gridMap= {
    display: "grid",
    gridTemplateColumns: "50px 50px 50px 50px 50px 50px 50px 50px",
    gridTemplateRows: "50px 50px 50px 50px 50px 50px 50px 50px",
    backgroundImage: `url('images/maze.png')`
    
  }
  
  let c_gridMapCell ={
    backgroundColor:"rgba(255, 255, 255, 0.8)",
    fontSize: "30px",
    textAlign: "center"
  }
  let vals={}
  let oppaio={}
  for(let i=1;i<65;i++){
  vals[i.toString()]="U"
  oppaio[i.toString()]=0.2
  }
  const [value,setValue]=useState(vals)
  const [oppai,setOppai]=useState(oppaio)
  function handleEvent(ev)
  {
    setValue({
      ...value,
      [ev.target.id]:"S"
    })
    setOppai({
      ...oppai,
      [ev.target.id]:1
    })
    console.log(ev.target)
  }
  function handleUp(ev)
  {
    setValue({
      ...value,
      [ev.target.id]:"U"
    })
    
  }
  function GridCell(props)
{
  return (<div id={props.id} 
            className={c_gridMapCell} 
            style={{opacity:oppai[props.id]}}
            onMouseDown={ handleEvent } 
            onMouseUp={handleUp}> 
    {value[props.id]}
  </div>)
}
function reset()
{
  let vals={}
  let oppai={}
  for(let i=1;i<=64;i++){
  vals[i.toString()]="U"
  oppai[i.toString()]=0.2
  }
  setValue(vals)
  setOppai(oppai)
}
// useEffect(()=>{
//   setPatternState({ path:[...path]})
// })
let onChange = path => {
  setPatternState({ ...patternState, path: [...path] });
};
let onFinish = () => {
  // setPatternState({ isLoading: true });
  // an imaginary api call
  setTimeout(() => {
    if(patternState){
    if (patternState.path.join("-") === "20-15-16-17-12-13-14-9-8-7-6-1") {
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
    <div className="App" style={{backgroundSize:"cover"}}>
  
    <div>
      <button onClick={()=>setWhich(0)} style={{color:"red"}}>Images</button> &emsp;
      <button onClick={()=>{setWhich(1)}} style={{color:"red"}}>Puzzle</button>
    </div>
    {
      which==0?<img src ="images/puz4_2.png" style={{width:"85%"}}/>:
    //  <div className="puz4-grid-map" style={{backgroundImage: `url('images/mars.png')`,backgroundSize:"cover"}}  >
    //    {gridCells}
    //  </div>
    <div style={{width:"50%"}}><PatternLock
    size={5}
    onChange={onChange}
    path={patternState.path}
    error={patternState.error}
    onFinish={onFinish}
    connectorThickness={5}
    disabled={patternState.disabled || patternState.isLoading}
    success={patternState.success}
    
  /></div>
    }

    </div>
    <button onClick={reset} style={{color:"blue"}}>Reset</button>
    </div>
    
   
  );
}

export default Puz4;
