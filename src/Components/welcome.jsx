import React from "react"
import "../Kenobi.css"
import "../style.css"
// import bg_login from "/images/bg_login.jpg"
// import  {  useHistory,Router, Route, Switch, Link} from 'react-router-dom'
import Kenobi from "./Kenobi"
import history from "./history"
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Welcome = () =>
{

	
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
            	<input type="text" id="name" placeholder="Nick Name" />
        	</p>
        	<p>
				<Link to="/Home">
				<button
            		id="submitbutton"
            		type="button"
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