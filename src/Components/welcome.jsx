import React from "react"
import "../Kenobi.css"
import "../style.css"
import { Link } from 'react-router-dom';
import {loginExchange} from "../Globals.js"
const Welcome = () =>
{
	loginExchange.setUserName("taran")
	loginExchange.setPassWord("taranu")
	// console.log(obj.getCredentials())
	function storeLogin(ev)
	{
		loginExchange.setUserName(document.getElementById("username").value)
		loginExchange.setPassWord(document.getElementById("password").value)
		loginExchange.setNickName(document.getElementById("nickname").value)
	}
    return (
        <div>
            <img src="/images/bg_login.jpg" alt="Snow"  style={{"width":'100%'}}/>
	<div style={{"text-align":"center"}}>
		<form class="form_login">
			<p>
            	<input type="text" id="username" placeholder="Username" />
        	</p>
        	<p>
            	<input type="password" id="password" placeholder="Password" />
        	</p>
        	<p>
            	<input type="text" id="nickname" placeholder="Nick Name" />
        	</p>
        	<p>
				<Link to="/Home">
				<button
            		id="submitbutton"
					type="button"
					onClick={storeLogin}
				>Submit
            	</button>
				</Link>
        	</p>
		</form>
	</div>
        </div>
    )
}
export default Welcome