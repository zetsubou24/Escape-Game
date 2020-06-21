import React ,{useState} from "react"
import { Link } from 'react-router-dom';
import "../style.css"
import { Button, Input } from "semantic-ui-react"
import Hints from "../Components/Hints"

export default function Puz1(props)
{
    const [ans,setAns]=useState("")
    const [nextlevel,setNextLevel]=useState(false)
    const [hidden1, setHidden1] = useState(true)
    const [hidden2, setHidden2] = useState(true)

    function puzz1()
    {
        if(ans.toLowerCase()==="1512"){
        setNextLevel(true)
        setHidden1(true)
        setHidden2(true)
        alert("correct! click on 'continue to next level' button below  to proceed  ")
        }
        else{
        alert("wrong! ")
        }
    }
    return (
        <div>
            <Hints hidden={hidden1} puzname="Puzzle 1" hintname="Hint 1" hintdesc="Multiply the gravitational force of MARS
            with 4000"/>
            <Hints hidden={hidden2} puzname="Puzzle 1" hintname="Hint 2" hintdesc="1512"/>
        <div useMap="#p1intro">
            <img src="images/yolo.png" alt="stuck_on_mars" style={{width:"100%", height: "75vh"}} useMap="#p1intro" / >
        </div>

	<div style={{display : "flex",backgroundImage:`url('images/mars1.jpg')`,backgroundSize:"cover",height:"25vh"}}>
		<div style={{display : "flex", flexWrap : "wrap"}}>
        <div style={{width:"100px"}}></div>
        <p style={{color: "orange",width:"75%",opacity:1.0,fontSize:"large"}}>
        We must ascertain the value of gravity on the planet.<br />
			"Aren’t you curious to know your weight and then go forth? Your weight is 4000 kilograms including your space suit.  Do this easy math and ace."
            &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&emsp;&emsp; &emsp; &emsp; &emsp;&emsp;&emsp; &emsp; 
        </p>
        <div style={{height:"25vh"}}>
        <Button primary onClick = {() => {
            setHidden1(!hidden1)
            setHidden2(true)
        }}>Hint 1</Button>
        <Button secondary onClick = {() => {
            setHidden2(!hidden2)
            setHidden1(true)
        }}>Hint 2</Button>
        </div>
        </div>
	<div >
        <p className="bottom-right-brackets" >
			<Input type="text" name="puzz1sol" id="puzz1sol" value={ans} onChange={(ev)=>setAns(ev.target.value)} ></Input>
            <br />
			<Button  
				id="submitbutton" 
            	type="button" 
            	onClick={puzz1}
                color="red"
                >Submit
            </Button>
            {nextlevel?
            <Link to="/GamePage3">
            <Button color="green">
                continue to next level
            </Button></Link>:null
            }
		</p>
	    </div>

	</div>
    </div>
    )
}
