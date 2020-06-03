import React from "react"
import "../Game.css"
import "../App.css"
import Puz2 from "../Test/Puz2"
const Level = (props) => {
    var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    var inventory=props.handles.inventory
return (
    <div className="item1">
            <div className="sub-grid-container" style={{backgroundImage:`url("images/bg2.jpg")`}}>
              <div className="sub-grid-item1"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>{onDrop(e, "game")}}>
                <Puz2 /> {/* add puzzle 2 */}
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
export default Level