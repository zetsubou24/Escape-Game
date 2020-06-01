import React, { useState, useEffect } from "react"
import Wood from "../images/Wood.jpg"
import "./test.css"
import { GridListTile } from "@material-ui/core"
const PuzzleDNDBoard = (props) =>{
    var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    var elems=props.handles.elems
    return(
        
  <div class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "puzzle")}}
  >{elems}</div>

    )
} 
const SolutionDNDBoard = (props) =>{
    var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    var elems=props.handles.elems
    
    return(
        <div class="grid-container">
  <div id="1" class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "1")}}>{elems["1"]}</div>

  <div id="2" class="grid-item"
  class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "2")}}>{elems["2"]}</div>

  <div id="3" class="grid-item"
  class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "3")}}>{elems["3"]}</div>  

  <div id="4" class="grid-item"
  class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "4")}}>{elems["4"]}</div>

  <div id="5" class="grid-item"
  class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "5")}}>{elems["5"]}</div>

  <div id="6" class="grid-item"
  class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "6")}}>{elems["6"]}</div>  

  <div id="7" class="grid-item"
  class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "7")}}>{elems["7"]}</div>

  <div id="8" class="grid-item"
  class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "8")}}>{elems["8"]}</div>

  <div id="9" class="grid-item"
  class="grid-item"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "9")}}>{elems["9"]}</div>  
</div>
    )
} 
const Puz2 = () =>{
    const [grid,setGrid]=useState({
        tasks:[
            {name:"1",curarea:"puzzle",bgcolor:"violet"},
            {name:"2",curarea:"puzzle",bgcolor:"indigo"},
            {name:"3",curarea:"puzzle",bgcolor:"blue"},
            {name:"4",curarea:"puzzle",bgcolor:"green"},
            {name:"5",curarea:"puzzle",bgcolor:"yellow"},
            {name:"6",curarea:"puzzle",bgcolor:"orange"},
            {name:"7",curarea:"puzzle",bgcolor:"red"},
            {name:"8",curarea:"puzzle",bgcolor:"pink"},
            {name:"9",curarea:"puzzle",bgcolor:"white"}
        ]
    })
    const [solutionCurState,setSolutionCurState]=useState({
        tasks:{
            "1":<div>unset</div>,
            "2":<div>unset</div>,
            "3":<div>unset</div>,
            "4":<div>unset</div>,
            "5":<div>unset</div>,
            "6":<div>unset</div>,
            "7":<div>unset</div>,
            "8":<div>unset</div>,
            "9":<div>unset</div>,
            "puzzle":[]
        }
    })
    useEffect(()=>{
    let temp={
    "1":<div id="u">unset</div>,
        "2":<div id="u">unset</div>,
        "3":<div id="u">unset</div>,
        "4":<div id="u">unset</div>,
        "5":<div id="u">unset</div>,
        "6":<div id="u">unset</div>,
        "7":<div id="u">unset</div>,
        "8":<div id="u">unset</div>,
        "9":<div id="u">unset</div>,
        "puzzle":[]
    }
    grid.tasks.forEach((t)=>{
        if(t.curarea=="puzzle")
        {
            temp[t.curarea].push(
                <div id="puzzle"
                onDragStart={(e) => onDragStart(e, t.name,t.curarea)}
                draggable
                className="draggable"
                style={{ backgroundColor: t.bgcolor }}
                >
                {t.name}
                </div>
            )
        }
        else{
        temp[t.curarea]=
                <div id={t.name}
                onDragStart={(e) => onDragStart(e, t.name,t.curarea)}
                draggable
                className="draggable"
                style={{ backgroundColor: t.bgcolor }}
                >
                {t.name}
                </div>
        }
    })
    setSolutionCurState({
        tasks:temp
    })
    },[grid])
    const onDragStart = (ev, id,parent) => {
        ev.dataTransfer.setData("id", id);
        ev.dataTransfer.setData("fromId",parent)
      }
    var onDragOver = (ev) => {
        ev.preventDefault();
      }
    var onDrop = (ev, cat) => {
        let NextS = []
        let objId = ev.dataTransfer.getData("id");
        let curObjId=ev.currentTarget.children[0].id
        let curCell=ev.currentTarget.id
        let fromCell=ev.dataTransfer.getData("fromid")
        let status=ev.currentTarget.children[0].id
        
        if(status!=undefined&&status!="puzzle")
        {
            grid.tasks.map((task) => {
                if (task.name == objId) {
                  task.curarea = curCell;
                  
                }
                else if(task.name==curObjId)
                {
                    task.curarea=fromCell
                }
                NextS.push(task)
              });
        }
        else
        {
        grid.tasks.map((task) => {
          if (task.name == objId) {
            task.curarea = cat;
            
          }
        NextS.push(task)
        });
        
    }
    setGrid({
        tasks: NextS
        })
        
      }
    return(
    <div className="Container_puz2">
        <PuzzleDNDBoard handles={{
            onDragOver: onDragOver,
            onDragStart: onDragStart,
            onDrop: onDrop,
            elems: solutionCurState.tasks["puzzle"]
            
          }}/>
        <SolutionDNDBoard handles={{
            onDragOver: onDragOver,
            onDragStart: onDragStart,
            onDrop: onDrop,
            elems: solutionCurState.tasks
            
          }}/>
    </div>
    )
}

export default Puz2