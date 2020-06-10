import React from "react"
export default function Puz7()
{

    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
      }
      var onDragOver = (ev) => {
        ev.preventDefault();
      }
    return(
        
            
            
              <div className="App">
                <img src='vehicle.jpg' style={{width: "900px", height: "900px"}}></img>
                <div 
                    onDragStart={(e) => onDragStart(e, 1)}
                    draggable
                    className="game-draggable"
                    style={{ backgroundColor: "red", width: "100px", height: "100px" }}
                  ></div>
              </div>
            
          
    )
}