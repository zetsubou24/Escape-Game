import React, { useState } from "react";
import "../Game.css";
import "../App.css";
import Puz2 from "../Puzzles/Puz2_3x3";
import Puz3 from "../Puzzles/Puz3";
import Puz4 from "../Puzzles/Puz4";
import Puz5 from "../Puzzles/Puz5";
import Puz6 from "../Puzzles/Puz6";
import Puz7 from "../Puzzles/Puz7";
import { useEffect } from "react";
import Sound from "react-sound";
const Level3 = (props) => {
  let onDragOver = props.handles.onDragOver;
  let onDragStart = props.handles.onDragStart;
  let onDrop = props.handles.onDrop;
  let inventory = props.handles.inventory;
  let setInventory = props.handles.setInventory;
  let level = props.handles.level;
  let setLevel = props.handles.setLevel;
  let success = props.handles.success;
  let setSuccess = props.handles.setSuccess;
  let setHidden1 = props.handles.setHidden1;
  let setHidden2 = props.handles.setHidden2;
  let bg;
  let musictemp;
  let currentLevel;
  let height, width;
  const [puz7rover, setpuz7rover] = useState("/images/vehicle4.jpg");
  if (level === 1) {
    bg = `url("images/mars1.jpg")`;
    height = "100%";
    width = "100%";
    musictemp = "music/angel.mpeg";
    currentLevel = (
      <Puz2
        handles={{
          level: level,
          setLevel: setLevel,
          success: success,
          setSuccess: setSuccess,
          inventory: props.handles.inventory,
          setInventory: props.handles.setInventory,
          setHidden1: props.handles.setHidden1,
          setHidden2: props.handles.setHidden2,
        }}
      />
    );
  } else if (level === 2) {
    bg = `url('/images/17_27_36.png')`;
    height = "100%";
    width = "100%";
    musictemp = "music/angel.mpeg";
    currentLevel = (
      <Puz3
        handles={{
          level: level,
          setLevel: setLevel,
          success: success,
          setSuccess: setSuccess,
          inventory: props.handles.inventory,
          setInventory: props.handles.setInventory,
          setHidden1: props.handles.setHidden1,
          setHidden2: props.handles.setHidden2,
        }}
      />
    );
  } else if (level === 3) {
    bg = `url('/images/marssurface2.jpg')`;
    height = "100%";
    width = "100%";
    musictemp = "music/angel.mpeg";

    currentLevel = (
      <Puz4
        handles={{
          level: level,
          setLevel: setLevel,
          success: success,
          setSuccess: setSuccess,
          inventory: props.handles.inventory,
          setInventory: props.handles.setInventory,
          setHidden1: props.handles.setHidden1,
          setHidden2: props.handles.setHidden2,
        }}
      />
    );
  } else if (level === 4) {
    bg = `url("images/mars1.jpg")`;
    height = "100%";
    width = "100%";
    musictemp = "music/angel.mpeg";

    currentLevel = (
      <Puz5
        handles={{
          level: level,
          setLevel: setLevel,
          success: success,
          setSuccess: setSuccess,
          inventory: props.handles.inventory,
          setInventory: props.handles.setInventory,
          setHidden1: props.handles.setHidden1,
          setHidden2: props.handles.setHidden2,
        }}
      />
    );
  } else if (level === 5) {
    bg = `url('images/circuit3.png')`;
    height = "764px";
    width = "100%";
    musictemp = "music/angel.mpeg";
    currentLevel = (
      <Puz6
        handles={{
          level: level,
          setLevel: setLevel,
          success: success,
          setSuccess: setSuccess,
          inventory: props.handles.inventory,
          setInventory: props.handles.setInventory,
          setHidden1: props.handles.setHidden1,
          setHidden2: props.handles.setHidden2,
        }}
      />
    );
  } else {
    bg = `url(${puz7rover})`;
    height = "764px";
    width = "100%";
    musictemp = "music/angel.mpeg";
    currentLevel = (
      <Puz7
        handles={{
          level: level,
          setLevel: setLevel,
          success: success,
          setSuccess: setSuccess,
          inventory: props.handles.inventory,
          setInventory: props.handles.setInventory,
          puz7rover: puz7rover,
          setpuz7rover: setpuz7rover,
          setHidden1: props.handles.setHidden1,
          setHidden2: props.handles.setHidden2,
        }}
      />
    );
  }
  if (musictemp !== props.handles.music) props.handles.setMusic(musictemp);
  function handleSongLoading() {}
  function handleSongPlaying() {}
  function handleSongFinishedPlaying() {}
  if (level > 6) Sound.status.PLAYING = false;
  return (
    <div className="item1">
      <div
        className="sub-grid-container"
        style={{
          backgroundImage: bg,
          opacity: 1,
          height: height,
          width: width,
        }}
      >
        <div
          className="sub-grid-item1"
          onDragOver={(e) => onDragOver(e)}
          //   onDrop={(e)=>{onDrop(e, "game")}}
        >
          {currentLevel}
        </div>
        <div
          className="sub-grid-item2"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "inventory")}
          placeholder="INVENTORY"
        >
          Inventory
          {inventory}
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Level3;
