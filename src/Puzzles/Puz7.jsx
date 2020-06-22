import React, { useEffect,useState } from "react"
import { Link } from 'react-router-dom';
import "./puz7.css"
export default function Puz7(props)
{

    let inventory=props.handles.inventory
    let setInventory=props.handles.setInventory
    let setHidden1 = props.handles.setHidden1
    let setHidden2 = props.handles.setHidden2
    let cnt=0;
    // localStorage.setItem('myCat', 'Tom');
    // console.log(localStorage.getItem('myCat'))
    const [panel,setPanel]=useState(false)
    const [items,setItems]=useState({
      battery:null,
      map:null,
      compass:null,
      pcb:null
    })
    const [finalPuz,setFinalPuz]=useState(false)
    const [materials,setMaterials]=useState({
      tasks:[
        {name:"pcb",positionX:130,positionY:130,bgColor:"red",curPos:"inventory",bg:`url(images/videocard.png)`},
        {name:"compass",positionX:130,positionY:130,bgColor:"green",curPos:"inventory",bg:`url(images/compass2.png)`},
        {name:"battery",positionX:130,positionY:130,bgColor:"yellow",curPos:"inventory",bg:`url(images/battery2.png)`},
        {name:"map",positionX:130,positionY:130,bgColor:"blue",curPos:"inventory",bg:`url(images/map.png)`},
      ]
    })
    
    useEffect(()=>{

      let f={
        inventory:[],
        rover:[],
        battery:[],
        map:[],
        compass:[],
        pcb:[]
      }
      materials.tasks.forEach((t)=>{
        
          f[t.curPos].push(
          <div 
          id={t.name}
          key={t.name}
          style={{width: "100px",
                  height: "50px",
                  backgroundRepeat:"no-repeat",
                  backgroundImage:t.bg}}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          ></div>
                  )
          
      }) 
      
      props.handles.setInventory(f.inventory)
      // setRoverItems(f.rover)
      setItems({
        battery:f.battery.length>0?f.battery[f.battery.length-1]:null,
      map:f.map.length>0?f.map[f.map.length-1]:null,
      compass:f.compass.length>0?f.compass[f.compass.length-1]:null,
      pcb:f.pcb.length>0?f.pcb[f.pcb.length-1]:null
      })
      
      // if(inventory.length==0){
      //   setFinalPuz(true)
      //   // console.log(inventory)

      // }

    },[materials])
    // useEffect(()=>{if(inventory.length==0&&items.battery!=null)},[items])
    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
      }
      var onDragOver = (ev) => {

        ev.preventDefault();
        let currento=ev.target
        currento.className="onDragHover"
        setTimeout(()=>currento.className="onNotDragHover",1000)
        
        

      }
      var onDrop = (ev, cat) => {

        if(cat=="inventory")
        return;
        let id=ev.dataTransfer.getData("id")
        if(id!=cat)
        {
          console.log("fuk")
          return;

        }

        let temp=[]
        materials.tasks.forEach((t)=>{
          if(t.name==id)
          {
            t.curPos=cat
          }
          temp.push(t)
        })
        setMaterials({
          tasks:temp
        })
      }
function mouseCoord(event)
    {
        // alert(event.clientX+" "+event.clientY)
    }
    function handleSuccess()
    {
      props.handles.setpuz7rover('images/roversuccess.jpg')
      return true;
    }

    // document.getElementById('map').addEventListener("mouseover", function( event ) {   
    //   // highlight the mouseover target
    //   event.target.style.color = "green";
    
    //   // reset the color after a short delay
    //   setTimeout(function() {
    //     event.target.style.color = "";
    //   }, 500);
    // }, false);
    return(
              <div className="App"  style={{display:"flex",alignContent:"flex-end"}}>
               
                <div id="rover" 
                style={{width: "900px", height: "700px"}} 
                // onClick={(ev)=>alert(ev.clientX+" "+ev.clientY)}
                >
                {/* {roverItems} */}

                <div id="pcb" style={{position:"absolute",height:"100px",width:"100px",left:580,top:472}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "pcb")}}>
                  {items.pcb!=null?<img src="images/wires3.png" />:<p style={{color:"red",height:"10px"}}>
                  {/* pcb */}
                  </p>}
                </div>

                <button onClick={()=>setPanel(!panel)} style={{position:"absolute",left:"686px",top:"337px",height:"100px",width:"100px"}} className="puz7-panel">
                {/* click me  */}
                </button>
                {panel?
                <div id="compass" style={{position:"absolute",height:"30%",width:"30%",left:"25%",top:"70%",backgroundImage:`url(images/panel.png)`,backgroundSize:"cover"}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "compass")}}>
                  <p style={{color:"red",width:"200px",height:"200px"}}>{items.compass!=null?items.compass:""}
                  </p>
                </div>:
                null
                }
                <div id="map" style={{position:"absolute",height:"120px",width:"150px",left:806,top:309}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "map")}}>
                  {items.map!=null?<img src="images/foldedmap.png" />:<p style={{color:"red",height:"10px",width:"inherit"}}>
                  {/* map */}
                  </p>}
                </div>
                <div id="battery" style={{position:"absolute",height:"100px",width:"120px",left:800,top:530}}
                onDragOver={(e)=>onDragOver(e)}
                onDrop={(e)=>{onDrop(e, "battery")}}>
                  {items.battery!=null?items.battery:<p style={{color:"red",height:"10px"}}>
                  {/* battery */}
                  </p>}
                </div>
                
                {
        
        items.battery!=null&&items.compass!=null&&items.map!=null&&items.pcb!=null&&handleSuccess()?
                <Link to="/FinalPuzzle">
                <button class="ui green button" >Click to continue</button>
                </Link> 
                :null
                }
                


                </div>
                

              </div>
            
          
    )
}