import React ,{useState} from "react"
import "./Ending.css"
import { Link } from 'react-router-dom';
import Sound from 'react-sound'

export default function Ending(props)
{

    props.handles.setMusic("/music/ending.mp3")
    const [visible1,setVisible1]=useState(false)
    setTimeout(() => setVisible1(), 5000);
    return(
        <div className="Ending-root">
            <div class="fade"></div>

<section class="star-wars">
<div class="crawl">
    <div class="title">
    <p>Finally</p>
    You have successfully reached the Home Base
    </div>
    
    <p>As soon as you enter the base you remove your suit and find the nearest water bottle and gulp it down.</p>
    
    <p>You look around yourself to find the Gateway empty. You don't think much of it and head on trough. You enter your ID once more and are welcomed into the Base.</p>

    <p>As soon as you enter the base, you find blood everywhere. In the distance you see a shadow figure.. </p>
    <p>You try to focus your eyes.. is that.. </p>
    An Alien...?<br /> <br /> <br /> <br />
    &emsp; &emsp; TO BE CONTINUED..
</div>
</section>
{
    visible1?<Link to="/FeedBack">
        <h4 >continue</h4>
    </Link>:<Link to="/FeedBack">
        <h4 style={{width:"150px",height:"40px",position:"absolute",top:"0px",left:"0px",backgroundColor:"red"}}>continue</h4>
    </Link>
    
}   
<Sound
      url="/music/ending.mp3"
      playStatus={Sound.status.PLAYING}
      // playFromPosition={300}
    //   loop={true}
      
    />
        </div>
    )
}