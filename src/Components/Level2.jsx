import React from "react"
import "../Game.css"
import "../App.css"
import Puz5 from "../Test/Puz5"
import Puz6 from "../Test/Puz6"
import Puz7 from "../Test/Puz7"
const Level2 = (props) => {
  let onDragOver=props.handles.onDragOver
  let onDragStart=props.handles.onDragStart
  let onDrop=props.handles.onDrop
  let inventory=props.handles.inventory
  let setInventory=props.handles.setInventory
  let level=props.handles.level
  let setLevel=props.handles.setLevel
  let success=props.handles.success
  let setSuccess=props.handles.setSuccess
    let bg=(level==1)?`url("images/black.jpg")`:(level==2)?`url('/images/black.jpg')`:`url('/images/vehicle.jpeg')`
return (
    <div className="item1" >
            <div className="sub-grid-container" style={{backgroundImage:bg,opacity:1}}>
              <div className="sub-grid-item1"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>{onDrop(e, "game")}}>
                {/* add puzzle */}
                {level==1?<Puz5 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess}}/>:(level==2)?<Puz6 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess}}/>:<Puz7 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess,inventory:props.handles.inventory,setInventory:props.handles.setInventory}}/>}
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
export default Level2