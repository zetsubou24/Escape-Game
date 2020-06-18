import React from "react"
import "../Game.css"
import "../App.css"
import Puz2 from "../Puzzles/Puz2_3x3"
import Puz3 from "../Puzzles/Puz3"
import Puz4 from "../Puzzles/Puz4"
const Level = (props) => {
    let onDragOver=props.handles.onDragOver
    let onDragStart=props.handles.onDragStart
    let onDrop=props.handles.onDrop
    let inventory=props.handles.inventory
    let level=props.handles.level
    let setLevel=props.handles.setLevel
    let success=props.handles.success
    let setSuccess=props.handles.setSuccess
    let bg=(level===1)?`url("images/bg2.jpg")`:(level===2)?`url('/images/17_27_36.png')`:`url('/images/bg1.jpg')`
    
return (
    <div className="item1" >
            <div className="sub-grid-container" style={{backgroundImage:bg,opacity:1}}>
              <div className="sub-grid-item1"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>{onDrop(e, "game")}}>
                {/* add puzzle */}
                {level===1?<Puz2 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess}}/>:(level===2)?<Puz3 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess}}/>:<Puz4 handles={{level:level,setLevel:setLevel,success:success,setSuccess:setSuccess}}/>}
              </div>
              <div className="sub-grid-item2"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>onDrop(e, "inventory")} placeholder="INVENTORY">
                Inventory big ugly 
              {inventory}
              </div>
            </div>
          </div>
          
)
}
export default Level