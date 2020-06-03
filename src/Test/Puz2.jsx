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
    var onDrop=props.handles.onDrop
    var elems=props.handles.elems
    function GridItemPuz(props){
      return(
      <div id={props.id} className="grid-item-puz"
      onDragOver={(e)=>onDragOver(e)}
      onDrop={(e)=>{onDrop(e, props.id)}}>{props.val}</div>
      )
    }
    let ids=[]
    for(let i=1;i<17;i++)
    {
      ids.push(<GridItemPuz id={i.toString()} val={elems[i.toString()]} />)
    }
    return(
        <div class="grid-container-puz">
          {ids}
        </div>
      )
}
const Puz2 = () =>{
    const [grid,setGrid]=useState({
        tasks:[
            {name:"1",curarea:"puzzle",bgcolor:"violet",bg:"images/rocket-grid-puz2/image_part_001.jpg",bg2:"images/rocket-night-grid-puz2/image_part_001.jpg"},
            {name:"2",curarea:"puzzle",bgcolor:"indigo",bg:"images/rocket-grid-puz2/image_part_002.jpg",bg2:"images/rocket-night-grid-puz2/image_part_002.jpg"},
            {name:"3",curarea:"puzzle",bgcolor:"blue",bg:"images/rocket-grid-puz2/image_part_003.jpg",bg2:"images/rocket-night-grid-puz2/image_part_003.jpg"},
            {name:"4",curarea:"puzzle",bgcolor:"green",bg:"images/rocket-grid-puz2/image_part_004.jpg",bg2:"images/rocket-night-grid-puz2/image_part_004.jpg"},
            {name:"5",curarea:"puzzle",bgcolor:"yellow",bg:"images/rocket-grid-puz2/image_part_005.jpg",bg2:"images/rocket-night-grid-puz2/image_part_005.jpg"},
            {name:"6",curarea:"puzzle",bgcolor:"orange",bg:"images/rocket-grid-puz2/image_part_006.jpg",bg2:"images/rocket-night-grid-puz2/image_part_006.jpg"},
            {name:"7",curarea:"puzzle",bgcolor:"red",bg:"images/rocket-grid-puz2/image_part_007.jpg",bg2:"images/rocket-night-grid-puz2/image_part_007.jpg"},
            {name:"8",curarea:"puzzle",bgcolor:"pink",bg:"images/rocket-grid-puz2/image_part_008.jpg",bg2:"images/rocket-night-grid-puz2/image_part_008.jpg"},
            {name:"9",curarea:"puzzle",bgcolor:"white",bg:"images/rocket-grid-puz2/image_part_009.jpg",bg2:"images/rocket-night-grid-puz2/image_part_009.jpg"},
            {name:"10",curarea:"puzzle",bgcolor:"white",bg:"images/rocket-grid-puz2/image_part_010.jpg",bg2:"images/rocket-night-grid-puz2/image_part_010.jpg"},
            {name:"11",curarea:"puzzle",bgcolor:"white",bg:"images/rocket-grid-puz2/image_part_011.jpg",bg2:"images/rocket-night-grid-puz2/image_part_011.jpg"},
            {name:"12",curarea:"puzzle",bgcolor:"white",bg:"images/rocket-grid-puz2/image_part_012.jpg",bg2:"images/rocket-night-grid-puz2/image_part_012.jpg"},
            {name:"13",curarea:"puzzle",bgcolor:"white",bg:"images/rocket-grid-puz2/image_part_013.jpg",bg2:"images/rocket-night-grid-puz2/image_part_013.jpg"},
            {name:"14",curarea:"puzzle",bgcolor:"white",bg:"images/rocket-grid-puz2/image_part_014.jpg",bg2:"images/rocket-night-grid-puz2/image_part_014.jpg"},
            {name:"15",curarea:"puzzle",bgcolor:"white",bg:"images/rocket-grid-puz2/image_part_015.jpg",bg2:"images/rocket-night-grid-puz2/image_part_015.jpg"},
            {name:"16",curarea:"puzzle",bgcolor:"white",bg:"images/rocket-grid-puz2/image_part_016.jpg",bg2:"images/rocket-night-grid-puz2/image_part_016.jpg"},
            {name:"17",curarea:"puzzle",bgcolor:"white"}
        ]
    })
    let [curImg,setCurImg]=useState({
      "1":{img:"images/rocket-grid-puz2/image_part_001.jpg",index:0},
      "2":{img:"images/rocket-night-grid-puz2/image_part_002.jpg",index:0},
      "3":{img:"images/rocket-grid-puz2/image_part_003.jpg",index:0},
      "4":{img:"images/rocket-night-grid-puz2/image_part_004.jpg",index:0},
      "5":{img:"images/rocket-grid-puz2/image_part_005.jpg",index:0},
      "6":{img:"images/rocket-grid-puz2/image_part_006.jpg",index:0},
      "7":{img:"images/rocket-night-grid-puz2/image_part_007.jpg",index:0},
      "8":{img:"images/rocket-night-grid-puz2/image_part_008.jpg",index:0},
      "9":{img:"images/rocket-grid-puz2/image_part_009.jpg",index:0},
      "10":{img:"images/rocket-night-grid-puz2/image_part_010.jpg",index:0},
      "11":{img:"images/rocket-night-grid-puz2/image_part_011.jpg",index:0},
      "12":{img:"images/rocket-night-grid-puz2/image_part_012.jpg",index:0},
      "13":{img:"images/rocket-grid-puz2/image_part_013.jpg",index:0},
      "14":{img:"images/rocket-grid-puz2/image_part_014.jpg",index:0},
      "15":{img:"images/rocket-night-grid-puz2/image_part_015.jpg",index:0},
      "16":{img:"images/rocket-grid-puz2/image_part_016.jpg",index:0},
      "17":{img:"images/white.png",index:0}
    });
    let ids={}
    for(let i=1;i<17;i++)
    {
      ids[i.toString()]=<div>unset</div>
    }
    ids["puzzle"]=[]
    const [solutionCurState,setSolutionCurState]=useState({
        tasks:ids
    })
    useEffect(()=>{

    let temp={}
    for(let i=1;i<17;i++)
    {
      temp[i.toString()]=<div>unset</div>
    }
    temp["puzzle"]=[]
    grid.tasks.forEach((t)=>{
        if(t.curarea=="puzzle")
        {
            temp[t.curarea].push(
                <PicDisplay handles={{id:"puzzle",onDragStart:onDragStart,t:t,size:100,curImg:curImg,setCurImg:setCurImg,name:t.name}}/>
            )
        }
        else{
        temp[t.curarea]=<PicDisplay handles={{id:t.name,onDragStart:onDragStart,t:t,size:150,curImg:curImg,setCurImg:setCurImg,name:t.name}}/>
        }
    })
    setSolutionCurState({
        tasks:temp
    })
    },[grid,curImg])

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