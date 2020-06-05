import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

function Puz4() {
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
  let gridCells=[]
  for(let i=1;i<65;i++)
  gridCells.push(<GridCell id={i.toString()}/>)
  return (
    <div>
    <div className="App" style={{width:"400px",backgroundSize:"cover"}}>
  
     <div className="puz4-grid-map" style={{backgroundImage: `url('images/maze.png')`,backgroundSize:"cover"}}  >
       {gridCells}
     </div>

    </div>
    <button onClick={reset}>Reset</button>
    </div>
    
   
  );
}

export default Puz4;
