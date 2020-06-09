import React from "react"
import "../Game.css"
import "../App.css"
import Puz5 from "../Test/Puz5"
import Puz6 from "../Test/Puz6"
const Level2 = (props) => {
    var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    var inventory=props.handles.inventory
    var level=props.handles.level
    var setLevel=props.handles.setLevel
    let bg=(level==1)?`url("images/black.jpg")`:(level==2)?`url('/images/black.jpg')`:`url('/images/black.jpg')`
return (
    <div className="item1" >
            <div className="sub-grid-container" style={{backgroundImage:bg,opacity:1}}>
              <div className="sub-grid-item1"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>{onDrop(e, "game")}}>
                {/* add puzzle */}
                {level==1?<Puz5 level={level} setLevel={setLevel}/>:(level==2)?<Puz6 level={level} setLevel={setLevel}/>:<Puz6 level={level} setLevel={setLevel}/>}
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