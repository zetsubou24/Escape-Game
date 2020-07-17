import React from 'react'
import "../App.css"
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Puzzintro = () =>
{
	function handlehead()
	{
		console.log("clicked")
	}
    return (
        <div>
            <img src="Images/Puzz1_intro.jpg" alt="stuck_on_mars" style={{width:"100%"}} usemap="#p1intro" />
	<map id="p1intro" name="p1intro">
		<area shape="rect" coords="1010,450,1200,400" alt="Sun" href="Puzzle1.html" />
	</map>
	<div className="click-the-head">
		<Link to="/HomePuzzle">
		<button type="button" className="puzzintro-assign" onClick={handlehead}>here</button>
		</Link>
	</div>
	<div class="top-left"  style={{color: "#330014",fontSize: "30px",height:"20vh"}}>
		<p>
			Now now hold your horses guys. Before you guys can run off to help the astronaut, how about we solve few simple puzzles to get you started?
		</p><br />
		<p>
			For this one you gotta use the head!
		</p>
	</div>
        </div>
    )
}
export default Puzzintro
