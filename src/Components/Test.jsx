import React from "react"
export default function Test(props)
{
    props.handles.setMusic("/music/alltime.mp3")
    return (
        <div>{props.text}</div>
    )
}