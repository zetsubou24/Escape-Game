import React, { useEffect,useState } from "react"

import { Link } from 'react-router-dom';

import "./puz7.css"
export default function Puz7(props)
{

    // const [Inventory,setInventory]=useState([]) 
    let inventory=props.handles.inventory
    let setInventory=props.handles.setInventory

    const [roverItems,setRoverItems]=useState([])
    const [battery,setBattery]=useState(null)
    const [map,setMap]=useState(null)
    const [panel,setPanel]=useState(false)
    const [compass,setCompass]=useState(null)
    const [pcb,setPcb]=useState(null)
    const [finalPuz,setFinalPuz]=useState(false)
    const [materials,setMaterials]=useState({
      tasks:[
        {name:"pcb",positionX:130,positionY:130,bgColor:"red",curPos:"inventory",bg:`url(images/videocard.png)`},
        {name:"compass",positionX:130,positionY:130,bgColor:"green",curPos:"inventory",bg:`url(images/compass2.png)`},
        {name:"battery",positionX:130,positionY:130,bgColor:"yellow",curPos:"inventory",bg:`url(images/battery2.png)`},
        {name:"map",positionX:130,positionY:130,bgColor:"blue",curPos:"inventory",bg:`url(images/map.png)`},
      ]
    })
    
    useEffect(()=>{

      let f={
        inventory:[],
        rover:[],
        battery:[],
        map:[],
        compass:[],
        pcb:[]
      }
      materials.tasks.forEach((t)=>{
        
          f[t.curPos].push(
          <div 
          id={t.name}
          key={t.name}
          style={{width: "100px",
                  height: "50px",
                  backgroundRepeat:"no-repeat",
                  backgroundImage:t.bg}}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          ></div>
                  )
          
      })
      props.handles.setInventory(f.inventory)
      setRoverItems(f.rover)
      setBattery(f.battery.length>0?f.battery[f.battery.length-1]:null)
      setMap(f.map.length>0?f.map[f.map.length-1]:null)
      setCompass(f.compass.length>0?f.compass[f.compass.length-1]:null)
      setPcb(f.pcb.length>0?f.pcb[f.pcb.length-1]:null)
      if(props.handles.inventory.length==0)
      setFinalPuz(true)

    },[materials])
    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
      }
      var onDragOver = (ev) => {

        ev.preventDefault();

      }
      var onDrop = (ev, cat) => {

        console.log(ev.target)
        console.log(cat)
        if(ev.target.id!=cat)
        return;

        let temp=[]
        let id=ev.dataTransfer.getData("id")
        materials.tasks.forEach((t)=>{
          if(t.name==id)
          {
            t.curPos=cat
          }
          temp.push(t)
        })
        console.log(temp)
        setMaterials({
          tasks:temp
        })
      }

    return(
              <div className="App">
               
                <div id="rover" 
                style={{width: "900px", height: "700px"}} onClick={(ev)=>console.log(ev.clientX,ev.clientY)}>
                {roverItems}

                <div id="pcb" style={{position:"absolute",height:"100px",width:"100px",left:"25%",top:"100%"}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "pcb")}}>
                  {pcb!=null?<img src="images/wires3.png" />:<p style={{color:"red",height:"10px"}}>pcb</p>}
                </div>

                <button onClick={()=>setPanel(!panel)} style={{position:"absolute",left:"30%",top:"90%"}} className="puz7-panel">click me </button>
                {panel?
                <div id="compass" style={{position:"absolute",height:"30%",width:"30%",left:"25%",top:"70%",backgroundImage:`url(images/panel.png)`,backgroundSize:"cover"}}
                
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "compass")}}>
                  <p style={{color:"red"}}>{compass!=null?compass:"compass here"}</p>
                </div>:
                null
                }
                <div id="map" style={{position:"absolute",height:"120px",width:"150px",left:"37%",top:"85%"}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "map")}}>
                  {map!=null?<img src="images/foldedmap.png" />:<p style={{color:"red",backgroundColor:"red",height:"10px",width:"inherit"}}>map</p>}
                </div>
                <div id="battery" style={{position:"absolute",height:"100px",width:"120px",left:"37%",top:"110%"}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "battery")}}>
                  {battery!=null?battery:<p style={{color:"red",height:"10px"}}>battery</p>}
                </div>
                
                {
                  inventory.length==0?
                <Link to="/FinalPuzzle">
                <button style={{color:"red"}}>Click to continue</button>
                </Link>:null
                }
                


                </div>
                

              </div>
            
          
    )
}