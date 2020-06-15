import React from "react"
import "../Game.css"
import "../App.css"
import Puz2 from "../Test/Puz2_3x3"
import Puz3 from "../Test/Puz3"
import Puz4 from "../Test/Puz4"
import Puz5 from "../Test/Puz5"
import Puz6 from "../Test/Puz6"
import Puz7 from "../Test/Puz7"
const Level3 = (props) => {
  let onDragOver=props.handles.onDragOver
  let onDragStart=props.handles.onDragStart
  let onDrop=props.handles.onDrop
  let inventory=props.handles.inventory
  let setInventory=props.handles.setInventory
  let level=props.handles.level
  let setLevel=props.handles.setLevel
  let success=props.handles.success
  let setSuccess=props.handles.setSuccess
  let bg;
  let currentLevel;
  if(level==1)
  {
  bg=`url("images/bg2.jpg")`
  currentLevel=<Puz2 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess,inventory:props.handles.inventory,setInventory:props.handles.setInventory}}/>
  }
  else if(level==2){
  bg=`url('/images/17_27_36.png')`
  currentLevel=<Puz3 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess,inventory:props.handles.inventory,setInventory:props.handles.setInventory}}/>
  }
  else if(level==3){
  bg=`url('/images/bg1.jpg')`
  currentLevel=<Puz4 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess,inventory:props.handles.inventory,setInventory:props.handles.setInventory}}/>
  }
  else if(level==4){
  bg=`url("images/black.jpg")`
  currentLevel=<Puz5 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess,inventory:props.handles.inventory,setInventory:props.handles.setInventory}}/>
  }
  else if(level==5){
  bg=`url('/images/black.jpg')`
  currentLevel=<Puz6 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess,inventory:props.handles.inventory,setInventory:props.handles.setInventory}}/>
  }
  else{
  bg=`url('/images/vehicle.jpeg')`
  currentLevel=<Puz7 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess,inventory:props.handles.inventory,setInventory:props.handles.setInventory}}/>
  }
return (
    <div className="item1"  >
        <div className="sub-grid-container" style={{backgroundImage:bg,opacity:1}}>
              <div className="sub-grid-item1"
              onDragOver={(e)=>onDragOver(e)}
            //   onDrop={(e)=>{onDrop(e, "game")}}
              >
                  {currentLevel}
              </div>
              <div className="sub-grid-item2"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>onDrop(e, "inventory")} placeholder="INVENTORY">
                Inventory
              {inventory}
              </div>
        </div>
    </div>
)
}
export default Level3