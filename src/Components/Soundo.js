import React,{useState} from "react"
import Sound from 'react-sound'

export default function  Soundo()
{
    let [seek,setSeek] =useState(0);
    return(
        <Sound

      url="/music/music.mp3"
      position={seek}
      playStatus={Sound.status.PLAYING}
      onPlaying={()=>setSeek(seek+1)}
      loop={true}
    />
    )
}