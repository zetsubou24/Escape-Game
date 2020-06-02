import React from "react"
import "./test.css"
export default function PicDisplay(props){
    let id=props.handles.id
    let onDragStart=props.handles.onDragStart
    let t=props.handles.t
    let size=props.handles.size
    return (
        <div id={id}
                onDragStart={(e) => onDragStart(e, t.name,t.curarea)}
                draggable
                className="puz2-draggable"
                style={{ backgroundColor: t.bgcolor,
                            backgroundImage: `url(${t.bg})`,
                            maxWidth:size,
                            maxHeight:size}}
                >
                </div>
    )
}