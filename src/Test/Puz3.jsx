import React from "react"
export default function puz3()
{
    return(
		
        <div style={{backgroundImage: `url('/images/17_27_36.png')`, height: "100vh",width: "100vw", backgroundSize: "cover"}}>
			<img src="/images/17_27_36.png"/>
		<p style={{color: "yellow",fontSize: "20px"}}>
			People have always fascinated about time and stars. But unlike on Earth, you live 37 minutes longer on Mars . So, don’t waste that time, those 37 minutes are prime cause the clock that you see ticks the Earth’s time.<br />
			Now talking about stars, isn't it facinating how tiny they are but are infact huge masses in space??
		</p>
		<input type="text" name="puz3sol" id="puz3sol" class="puz3solution" placeholder="Puzzle3 Solution" />
		<button id="puz3but" class="puz3solution" onclick="puz3_2()" > Submit</button>
		<div>
			<img src="images/bomb.png" class="bomb" onClick={puz3} /><br />
		</div>
		</div>
    )
}