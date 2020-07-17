import React ,{useState} from "react"
import "../Kenobi.css"
import "../style.css"
import { Link ,useHistory} from 'react-router-dom';
import {loginExchange} from "../Globals.js"
import { Button, Input, Popup } from "semantic-ui-react" 
import history from "./history"
import Sound from 'react-sound'
import Soundo from "./Soundo"
const Welcome = () =>
{
	loginExchange.setUserName("taran")
	loginExchange.setPassWord("taranu")
	
	let path = `/Home`; 
	let history = useHistory();
	
	function storeLogin(ev)
	{
		let username=document.getElementById("username").value
		let pass=document.getElementById("password").value
		if(username==="Engimaze"&&pass==="AstroFate")
    	history.push(path);
		
		loginExchange.setUserName(document.getElementById("username").value)
		loginExchange.setPassWord(document.getElementById("password").value)
		
		// loginExchange.setNickName(document.getElementById("nickname").value)
	}
    return (
        <div style={{display: 'flex', height:'100vh'}}>
            <img src="/images/astro.gif" alt="Snow"  style={{"width":'100%'}}/>
	<div style={{"text-align":"center"}}>
		<form class="form_login" >
			<p>
            	<Input type="text" id="username" placeholder="Username" />
        	</p>
        	<p>
            	<Input type="password" id="password" placeholder="Password" />
        	</p>
        	<p>
			{/* <h4 style={{color:"red",width:"1000px"}}>&emsp; &emsp;&emsp;&emsp;&emsp; Enter your Favorite thing about space </h4> */}
			{/* <Popup inverted content='PLEASE DO REMEMBER IT!' color="red" position = "right center" trigger={<Input id="nickname" placeholder="Enter your Favorite thing about space" />
			}/> */}
			{/* <h4 style={{color:"red",width:"1000px"}}> PLEASE DO REMEMBER IT!</h4> */}
        	</p>
        	<p>
				{/* <Link id="redirect" to=""> */}
				<Button
            		id="submitbutton"
					type="button"
					onClick={storeLogin}
					color = "red"
				>Submit
            	</Button>
				{/* </Link> */}
        	</p>
		</form>
	</div>
	{/* <Soundo /> */}
	
	
        </div>
    )
}
export default Welcome