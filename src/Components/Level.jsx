import React from "react"
import "../Game.css"
import "../App.css"
import Puz2 from "../Test/Puz2"
import Puz3 from "../Test/Puz3"
import Puz4 from "../Test/Puz4"
const Level = (props) => {
    var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    var inventory=props.handles.inventory
    var level=props.handles.level
    let bg=(level<=1)?`url("images/bg2.jpg")`:(level==2)?`url('/images/17_27_36.png')`:`url('/images/bg1.jpg')`
return (
    <div className="item1">
            <div className="sub-grid-container" style={{backgroundImage:bg}}>
              <div className="sub-grid-item1"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>{onDrop(e, "game")}}>
                {/* add puzzle */}
                {level==1?<Puz2 />:(level==2)?<Puz3 />:<Puz4 />}
                
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