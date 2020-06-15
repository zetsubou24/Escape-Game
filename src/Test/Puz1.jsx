import React ,{useState} from "react"
import { Link } from 'react-router-dom';
import "../style.css"
import { Button, Input } from "semantic-ui-react"

export default function Puz1()
{
    const [ans,setAns]=useState("")
    const [nextlevel,setNextLevel]=useState(false)
    function puzz1()
    {
        if(ans=="1508"){
        setNextLevel(true)
        alert("correct! click on 'continue to next level' button below  to proceed  ")
        }
        else{
        alert("wrong! ")
        }
    }
    return (
        <div>
        <div usemap="#p1intro">
            <img src="images/0.97.png" alt="stuck_on_mars" style={{width:"100%", height: "75vh"}} usemap="#p1intro" / >
        </div>

	<div style={{display : "flex",backgroundImage:`url('images/mars1.jpg')`,backgroundSize:"cover",height:"25vh"}}>
		<div style={{display : "flex", flexWrap : "wrap"}}>
        <p style={{color: "white"}}>
        &emsp; &emsp; &emsp; &emsp; Solve the riddle below to ascertain the value of gravity on the planet.<br />
			&emsp; &emsp; &emsp; &emsp; "Aren’t you curious to know your weight and then go forth? Your weight is 4000 kilograms including your space suit.  Do this easy math and ace."
		</p>
        <div style={{height:"25vh"}}>
        <Button primary>Hint 1</Button>
        <Button secondary>Hint 2</Button>
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
