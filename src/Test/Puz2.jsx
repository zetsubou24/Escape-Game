import React, { useState, useEffect } from "react"
import "./test.css"
import PicDisplay from "./PicDisplay"
const PuzzleDNDBoard = (props) =>{
    var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    var elems=props.handles.elems
    return(
  <div class="grid-item-puz-collection"
  onDragOver={(e)=>onDragOver(e)}
  onDrop={(e)=>{onDrop(e, "puzzle")}}>{elems}</div>
    )
} 

const SolutionDNDBoard = (props) =>{
    var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    var elems=props.handles.elems
    function GridItemPuz(props){
      return(
      <div id={props.id} className="grid-item-puz"
      onDragOver={(e)=>onDragOver(e)}
      onDrop={(e)=>{onDrop(e, props.id)}}>{props.val}</div>
      )
    }
    return(
        <div class="grid-container-puz">
          <GridItemPuz id="1" val={elems["1"]} />
          <GridItemPuz id="2" val={elems["2"]} />
          <GridItemPuz id="3" val={elems["3"]} />
          <GridItemPuz id="4" val={elems["4"]} />
          <GridItemPuz id="5" val={elems["5"]} />
          <GridItemPuz id="6" val={elems["6"]} />
          <GridItemPuz id="7" val={elems["7"]} />
          <GridItemPuz id="8" val={elems["8"]} />
          <GridItemPuz id="9" val={elems["9"]} />
        </div>
      )
} 
const Puz2 = () =>{
    const [grid,setGrid]=useState({
        tasks:[
            {name:"1",curarea:"puzzle",bgcolor:"violet",bg:"images/grid-puz2/grid1-1.png"},
            {name:"2",curarea:"puzzle",bgcolor:"indigo",bg:"images/grid-puz2/grid1-2.png"},
            {name:"3",curarea:"puzzle",bgcolor:"blue",bg:"images/grid-puz2/grid1-3.png"},
            {name:"4",curarea:"puzzle",bgcolor:"green",bg:"images/grid-puz2/grid2-1.png"},
            {name:"5",curarea:"puzzle",bgcolor:"yellow",bg:"images/grid-puz2/grid2-2.png"},
            {name:"6",curarea:"puzzle",bgcolor:"orange",bg:"images/grid-puz2/grid2-3.png"},
            {name:"7",curarea:"puzzle",bgcolor:"red",bg:"images/grid-puz2/grid3-1.png"},
            {name:"8",curarea:"puzzle",bgcolor:"pink",bg:"images/grid-puz2/grid3-2.png"},
            {name:"9",curarea:"puzzle",bgcolor:"white",bg:"images/grid-puz2/grid3-3.png"},
            {name:"10",curarea:"puzzle",bgcolor:"white"}
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
                <PicDisplay handles={{id:"puzzle",onDragStart:onDragStart,t:t,size:100}}/>
            )
        }
        else{
        temp[t.curarea]=<PicDisplay handles={{id:t.name,onDragStart:onDragStart,t:t,size:150}}/>
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
      <div className="Container_puz2_item1">
        <PuzzleDNDBoard handles={{
            onDragOver: onDragOver,
            onDragStart: onDragStart,
            onDrop: onDrop,
            elems: solutionCurState.tasks["puzzle"]
          }}/>
      </div>
      <div className="Container_puz2_item2">
        <SolutionDNDBoard handles={{
            onDragOver: onDragOver,
            onDragStart: onDragStart,
            onDrop: onDrop,
            elems: solutionCurState.tasks
          }}/>
      </div>
    </div>
    )
}

export default Puz2