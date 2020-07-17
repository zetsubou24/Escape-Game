// // import React, { useState, useEffect } from "react";
// // import { Link } from 'react-router-dom';

// // const useAudio = url => {
// //   const [audio] = useState(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'));
// //   const [playing, setPlaying] = useState(false);

// //   const toggle = () => setPlaying(!playing);

// //   useEffect(() => {
// //       playing ? audio.play() : audio.pause();
// //     },
// //     [playing]
// //   );

// //   useEffect(() => {
// //     audio.addEventListener('ended', () => setPlaying(false));
// //     return () => {
// //       audio.removeEventListener('ended', () => setPlaying(false));
// //     };
// //   }, []);

// //   return [playing, toggle,audio];
// // };

// // const Music = ({ url }) => {
// //   const [playing, toggle,audio] = useAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

// //   return (
// //     <div>
// //       <button onClick={() => {toggle(); playing ? audio.play() : audio.pause()}}>NiggaHere</button>
// //     </div>
// //   );
// // };

// // // export default useAudio;
// // export default Music;
// import React, { Component } from "react"
 
// export default class extends Component {
//   componentDidMount() {
//     const audioEl = document.getElementsByClassName("audio-element")[0]
//     audioEl.play()
//   }
 
//   render() {
//     return (
//       <div>
//         <audio className="audio-element">
//           <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
//         </audio>
//       </div>
//     )
//   }
// }
