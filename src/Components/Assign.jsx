import React, { useEffect,useState } from "react"
// import commander from "images/commander.png"
import "../style.css"
import GamePage from "../GamePage"
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Assign = () => {
    var temp;
    const [players,setPlayers]=useState([{
name:"...",
set:false
    },
            {
                name:"AAA",
                set:false
            },
            {
                name:"BBB",
                set:false
            },
            {
                name:"CCC",
                set:false
            },
            {
                name:"DDD",
                set:false
            },
            {
                name:"EEE",
                set:false
            },{
                name:"FFF",
                set:false
            },
            {
                name:"dummy",
                set:false
            }
    ])
    const [currentVal,setCurrentVal]=useState({
            "player1":"...",
            "player2":"...",
            "player3":"...",
            "player4":"...",
            "player5":"...",
            "player6":"..."
    })
    var [options,setOptions]=useState([])
    useEffect(()=>{
        let x=[]
        players.forEach((t)=>{
            if(t.set===false){
            x.push(<option key={t.name} value={t.name}>{t.name}</option>)
            }
    })
    setOptions(x)

    },[players])
    function handlePlayers(event)
    {
        let newVal=event.target.value
        let oldVal=currentVal[event.target.id]
        let oldarr=[]
        players.forEach((t)=>{
            if(t.name==oldVal)
            {
                oldarr.push({
                    name:t.name,
                    set:false
                })
            }
            else if(t.name==newVal)
            {
                oldarr.push({
                    name:t.name,
                    set:true
                })
            }
            else
            oldarr.push(t)
        })
        setPlayers(oldarr)
        setCurrentVal({
            ...currentVal,
            [event.target.id]:newVal
        })
        
        temp=newVal
    }
    console.log(currentVal["player1"])
    var bg_welcome_pic=""
    return (
        <div className="Assign-root" style={{backgroundImage: `url("images/bg_welcome2.jpg")`}}>
            <div class="puzzle-location">
        
	<div class="top-left">
    Well now that you're the leader of the group Taran, I want you to split your team into 3 teams. Each one will be working on one puzzle that will ultimately help our astronaut reach back to the Home Pod.
		
	</div>
	<div class="centered">
         {/* <img src="images/commander.png" className="commander-img"/> */}
    </div> 
	{/* <div class="bottom-left">
		<p>Team A</p>
	<div >
		Member 1 <select id="player1" onChange={handlePlayers} value={currentVal["player1"]}>{options}</select><input type="text" value={currentVal["player1"]} placeHolder="select a Player"/><br />
		Member 2 <select id="player2" onChange={handlePlayers} value={currentVal["player2"]}>{options}</select><input type="text" value={currentVal["player2"]} placeHolder="select a Player"/><br />
	</div>
    <Link to="/GamePage">
    <button >Start</button>
    </Link>
	</div>
	<div class="bottom-right">
		<p>Team B</p>
	<div >
		Member 1 <select id="player3" onChange={handlePlayers} value={currentVal["player3"]}>{options}</select><input type="text" value={currentVal["player3"]} placeHolder="select a Player"/><br />
		Member 2 <select id="player4" onChange={handlePlayers} value={currentVal["player4"]}>{options}</select><input type="text" value={currentVal["player4"]} placeHolder="select a Player"/><br />
	</div>	
    <Link to="/GamePage2">
    <button >Start</button>
    </Link>
	</div> */}

    <Link to="/GamePage3">
        <button style={{position:"absolute",left:"50%",bottom:0}}>start</button>
    </Link>

    </div>
    </div>

        
    )
}
export default Assign