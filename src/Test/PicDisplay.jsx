import React,{useState} from "react"
import "./test.css"
export default function PicDisplay(props){
    let id=props.handles.id
    let onDragStart=props.handles.onDragStart
    let t=props.handles.t
    let size=props.handles.size    
    let index=props.handles.index
    let curImg=props.handles.curImg
    let setCurImg=props.handles.setCurImg
    let name=props.handles.name
    function handleImage()
    {
    setCurImg({
        ...curImg,
        [t.name]:{img:curImg[t.name].index==0?t.bg:t.bg2,
                  index:(curImg[t.name].index+1)%2}
    })

}

    return (
        <div id={id} key={t.name}
                onDragStart={(e) => onDragStart(e, t.name,t.curarea)}
                draggable
                className="puz2-draggable"
                style={{ backgroundColor: t.bgcolor,
                            backgroundImage: `url(${curImg[t.name].img})`,
                            maxWidth:size,
                            maxHeight:size}}>
                    <button onClick={handleImage} >flip</button>
                </div>
    )
}