import React, { useState, useEffect } from "react"
import "./puz2.css"
import PicDisplay from "./PicDisplay"
import { Input, Button } from "semantic-ui-react"

const Puz2 = (props) =>{
    let ids=[]

    let level=props.handles.level
    let setLevel=props.handles.setLevel
    let success=props.handles.success
    let setSuccess=props.handles.setSuccess
    let inventory=props.handles.inventory
    let setInventory=props.handles.setInventory
    const [mapVisible,setMapVisible]=useState(false)
    const [grid,setGrid]=useState({
        tasks:[
            {name:"1",curarea:"puzzle",bgcolor:"violet",bg:"images/puzzle2frontface/image_part_001.jpg",bg2:"images/Puzzle2sol/image_part_001.jpg"},
            {name:"2",curarea:"puzzle",bgcolor:"indigo",bg:"images/puzzle2frontface/image_part_002.jpg",bg2:"images/Puzzle2sol/image_part_002.jpg"},
            {name:"3",curarea:"puzzle",bgcolor:"blue",bg:"images/puzzle2frontface/image_part_003.jpg",bg2:"images/Puzzle2sol/image_part_003.jpg"},
            {name:"4",curarea:"puzzle",bgcolor:"green",bg:"images/puzzle2frontface/image_part_004.jpg",bg2:"images/Puzzle2sol/image_part_004.jpg"},
            {name:"5",curarea:"puzzle",bgcolor:"yellow",bg:"images/puzzle2frontface/image_part_005.jpg",bg2:"images/Puzzle2sol/image_part_005.jpg"},
            {name:"6",curarea:"puzzle",bgcolor:"orange",bg:"images/puzzle2frontface/image_part_006.jpg",bg2:"images/Puzzle2sol/image_part_006.jpg"},
            {name:"7",curarea:"puzzle",bgcolor:"red",bg:"images/puzzle2frontface/image_part_007.jpg",bg2:"images/Puzzle2sol/image_part_007.jpg"},
            {name:"8",curarea:"puzzle",bgcolor:"pink",bg:"images/puzzle2frontface/image_part_008.jpg",bg2:"images/Puzzle2sol/image_part_008.jpg"},
            {name:"9",curarea:"puzzle",bgcolor:"white",bg:"images/puzzle2frontface/image_part_009.jpg",bg2:"images/Puzzle2sol/image_part_009.jpg"},
            {name:"10",curarea:"puzzle",bgcolor:"white"}
        ]
    })
    let [curImg,setCurImg]=useState({
      "1":{img:"images/Puzzle2frontface/image_part_001.jpg",index:0},
      "2":{img:"images/puzzle2frontface/image_part_002.jpg",index:0},
      "3":{img:"images/Puzzle2frontface/image_part_003.jpg",index:0},
      "4":{img:"images/puzzle2frontface/image_part_004.jpg",index:0},
      "5":{img:"images/Puzzle2frontface/image_part_005.jpg",index:0},
      "6":{img:"images/Puzzle2frontface/image_part_006.jpg",index:0},
      "7":{img:"images/puzzle2frontface/image_part_007.jpg",index:0},
      "8":{img:"images/puzzle2frontface/image_part_008.jpg",index:0},
      "9":{img:"images/Puzzle2frontface/image_part_009.jpg",index:0},
      "10":{img:"images/white.png",index:0}
    });
    const [ans,setAns]=useState("")
    let ids2={}
    for(let i=1;i<10;i++)
      ids2[i.toString()]=<div></div>
    ids2["puzzle"]=[]
    const [solutionCurState,setSolutionCurState]=useState({
        tasks:ids2
    })
    useEffect(()=>{
      let counter=0;
      let total=0;
      let temp=document.getElementById("solutionDNDBoard").children
      for(var element in temp){
        if(temp[element].children==undefined)
        {

        }
        else if(temp[element].children[0].id==temp[element].id)
        total++
        counter++
      }
      // console.log(total)
      if(total==9)
      setMapVisible(true)
    },[solutionCurState])
    useEffect(()=>{

    let temp={}
    for(let i=1;i<10;i++)
      temp[i.toString()]=<div></div>
    temp["puzzle"]=[]
    grid.tasks.forEach((t)=>{
        if(t.curarea=="puzzle"){
            temp[t.curarea].push(
                <PicDisplay handles={{id:"puzzle",onDragStart:onDragStart,t:t,size:100,curImg:curImg,setCurImg:setCurImg,name:t.name,class:"puz2-draggable-3x3"}}/>
            )}
        else
        temp[t.curarea]=<PicDisplay handles={{id:t.name,onDragStart:onDragStart,t:t,size:150,curImg:curImg,setCurImg:setCurImg,name:t.name,class:"puz2-draggable-3x3"}}/>
    })
    setSolutionCurState({
        tasks:temp
    })
    
    console.log(solutionCurState)
    },[grid,curImg])
    function handleAnswer(ev)
    {
        if(ans=="11-JAN-2030")
        {
            // setSuccess(1)
            alert("correct")
            props.handles.setInventory([<div 
              id={"map"}
              key={"map"}
              style={{width: "100px",
                      height: "50px",
                      backgroundRepeat:"no-repeat",
                      backgroundImage:`url(images/map.png)`}}
              onDragStart={(e) => onDragStart(e, "map")}
              draggable
            ></div>])
            // setLevel((level+1)%3)
            setLevel((level+1)%6)
        }
    }
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
       
        // if(objId==ev.currentTarget.id)
        // {
        //   console.log("confirmed")
        // }

        if(status!=undefined&&status!="puzzle")
        {
            grid.tasks.map((task) => {
                if (task.name == objId) 
                  task.curarea = curCell;
                else if(task.name==curObjId)
                    task.curarea=fromCell
                NextS.push(task)
              });
        }
        else
        {
        grid.tasks.map((task) => {
          if (task.name == objId) 
            task.curarea = cat;
        NextS.push(task)
        });
    }
    setGrid({
        tasks: NextS
        })
        
      }
      const PuzzleDNDBoard = (props) =>{
        var onDragOver=props.handles.onDragOver
        var onDragStart=props.handles.onDragStart
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
          <div id={props.id} className="grid-item-puz2"
          onDragOver={(e)=>onDragOver(e)}
          onDrop={(e)=>{onDrop(e, props.id)}}>{props.val}</div>
          )
        }
        for(let i=1;i<10;i++)
          ids.push(<GridItemPuz id={i.toString()} val={elems[i.toString()]} />)
        return(
            <div id="solutionDNDBoard" class="grid-container-puz2">
              {ids}
            </div>
          )
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

      <div className="Container_puz2_item2" >
        
        {!mapVisible?
        <SolutionDNDBoard handles={{
            onDragOver: onDragOver,
            onDragStart: onDragStart,
            onDrop: onDrop,
            elems: solutionCurState.tasks
          }}/>:<img src="images/puzzle2-sol.png"/>}
          
      </div>
      <div>
      <Input type="text" placeholder="Answer here"  value={ans} onChange={(ev)=>setAns(ev.target.value)}/><br/>
      <Button color="green" onClick={handleAnswer}>Check</Button>

      </div>
    <img src="images/orig_puz4_dummy.png" style={{height:"90px",width:"100px"}}/>

      
    </div>
    )
}
export default Puz2