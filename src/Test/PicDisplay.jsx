import React,{useState} from "react"
import "./test.css"
export default function PicDisplay(props){
    let id=props.handles.id
    let onDragStart=props.handles.onDragStart
    let t=props.handles.t
    let size=props.handles.size    
    let setIndex=props.handles.setIndex
    let index=props.handles.index
    let curImg=props.handles.curImg
    let setCurImg=props.handles.setCurImg
    let name=props.handles.name
    function handleImage()
    {
        setIndex({
            ...index,
            [name]:(index[name]+1)%2
        })
        
    setCurImg({
        ...curImg,
        [t.name]:index[t.name]==0?t.bg:t.bg2
    })
    console.log(curImg)
}  
    return (
        <div id={id} key={t.name}
                onDragStart={(e) => onDragStart(e, t.name,t.curarea)}
                draggable
                className="puz2-draggable"
                style={{ backgroundColor: t.bgcolor,
                            backgroundImage: `url(${curImg[t.name]})`,
                            maxWidth:size,
                            maxHeight:size}}
                >
                    <button onClick={handleImage} >flip</button>
                </div>
    )
}