import React from "react"
import "./hints.css"

export default function Hints(props)
{
    return (
        // <div className="Hints-Container" style={{backgroundImage:`url('images/befmars.jpg')`,height:"100%",width:"100%"}}>
        <div class="sub-container" style={{display : props.hidden ? "none" : "block"}}>
            <div class="book">
                <div class="cover">
                    <img src = "images/cover.jpg" alt="hint book cover face" />
                </div>
                <div class="details">
                    {/* <h2>{props.puzname}</h2> */}
                    <h2>{props.hintname}</h2>
                    <p>
                        {props.hintdesc}
                    </p>
                </div>

            </div>
        </div>
        // </div>
    )
}