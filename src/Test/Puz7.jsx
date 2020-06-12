import React, { useEffect,useState } from "react"
// import "./puz7.css"
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

    const [materials,setMaterials]=useState({
      tasks:[
        {name:"pcb",positionX:130,positionY:130,bgColor:"red",curPos:"inventory"},
        {name:"compass",positionX:130,positionY:130,bgColor:"green",curPos:"inventory"},
        {name:"battery",positionX:130,positionY:130,bgColor:"yellow",curPos:"inventory"},
        {name:"map",positionX:130,positionY:130,bgColor:"blue",curPos:"inventory"},
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
          style={{width: "200px",
                  height: "50px",
                  backgroundColor: t.bgColor}}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          >{t.name}</div>
                  )
          
      })
      console.log(f)
      props.handles.setInventory(f.inventory)
      console.log(inventory)
      setRoverItems(f.rover)
      setBattery(f.battery.length>0?f.battery[f.battery.length-1]:null)
      setMap(f.map.length>0?f.map[f.map.length-1]:null)
      setCompass(f.compass.length>0?f.compass[f.compass.length-1]:null)
      setPcb(f.pcb.length>0?f.pcb[f.pcb.length-1]:null)
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

                <div id="pcb" style={{position:"absolute",height:"20%",width:"30%",left:"15%",top:"100%"}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "pcb")}}>
                  {pcb!=null?pcb:<p style={{color:"red"}}>pcb here</p>}
                </div>

                <button onClick={()=>setPanel(!panel)}>click me </button>
                {panel?
                <div id="compass" style={{position:"absolute",height:"30%",width:"30%",left:"25%",top:"70%",backgroundImage:`url(images/panel.png)`,backgroundSize:"cover"}}
                
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "compass")}}>
                  <p style={{color:"red"}}>{compass!=null?compass:"compass here"}</p>
                </div>:
                null
                }
                <div id="map" style={{position:"absolute",height:"100px",width:"40%",left:"20%",top:"90%"}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "map")}}>
                  {map!=null?map:<p style={{color:"red"}}>map here</p>}
                </div>
                <div id="battery" style={{position:"absolute",height:"10%",width:"85%",left:"65%",top:"85%"}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "battery")}}>
                  {battery!=null?battery:<p style={{color:"red"}}>battery here</p>}
                </div>

                </div>
                {/* <div 
                    onDragStart={(e) => onDragStart(e, 1)}
                    draggable
                    className="game-draggable"
                    style={{ backgroundColor: "red", width: "100px", height: "100px" }}
                  ></div> */}
                  <div id="inventory"
                  onDragOver={(e)=>onDragOver(e)}
                  onDrop={(e)=>{onDrop(e, "inventory")}}
                  style={{height:"100px",width:"100px",borderColor:"red"}}>
                    {/* {Inventory} */}
                  </div>

              </div>
            
          
    )
}