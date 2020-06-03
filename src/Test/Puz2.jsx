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
          <GridItemPuz id="10" val={elems["10"]} />
          <GridItemPuz id="11" val={elems["11"]} />
          <GridItemPuz id="12" val={elems["12"]} />
          <GridItemPuz id="13" val={elems["13"]} />
          <GridItemPuz id="14" val={elems["14"]} />
          <GridItemPuz id="15" val={elems["15"]} />
          <GridItemPuz id="16" val={elems["16"]} />

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
            "10":<div>unset</div>,
            "11":<div>unset</div>,
            "12":<div>unset</div>,
            "13":<div>unset</div>,
            "14":<div>unset</div>,
            "15":<div>unset</div>,
            "16":<div>unset</div>,
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
        "10":<div id="u">unset</div>,
        "11":<div id="u">unset</div>,
        "12":<div id="u">unset</div>,
        "13":<div id="u">unset</div>,
        "14":<div id="u">unset</div>,
        "15":<div id="u">unset</div>,
        "16":<div id="u">unset</div>,
        "puzzle":[]
    }
    
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

    // console.log(curImg)
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