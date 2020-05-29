import React from "react"

const Level = (props) => {
    var onDragOver=props.handles.onDragOver
    var onDragStart=props.handles.onDragStart
    var onDrop=props.handles.onDrop
    var tasks=props.handles.tasks
return (
    <div className="item1">
            <div className="sub-grid-container">
              <div className="sub-grid-item1"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>{onDrop(e, "game")}}>
                {tasks.game}
              </div>

              <div className="sub-grid-item2"
              onDragOver={(e)=>onDragOver(e)}
              onDrop={(e)=>onDrop(e, "inventory")} placeholder="INVENTORY">
              {tasks.inventory}
              </div>
            </div>
          </div>
)
}
export default Level