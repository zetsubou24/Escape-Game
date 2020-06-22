import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginExchange, quoteExchange } from "../Globals.js";
import "./puz8.css";
import { Button, Input } from "semantic-ui-react";
import Hints from "../Components/Hints";

export default function Puz8() {
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [ans, setAns] = useState("");
  const [ending, setEnding] = useState(false);
  function checkAns() {
    var x = document.getElementById("end");
    if (ans == quoteExchange.getCurQuote()) {
      alert("correct!");
      window.location.href = "/Ending"
    } else {
        alert("wrong!");

    }
  }
  return (
    <div className="puz8-root">
      <p className="puz8-top-left" style={{fontFamily:"Orbitron"}}>
        You've almost made it astronaut! Just one last step so that you can
        reach to the Home Base. <br />
        In the most difficult times, it's always a good thing to go back a few
        steps.
        <br />
      </p>
      <form>
        <p style={{ alignContent: "center", padding: "0%" }}>
          <Input
            id="end"
            placeholder="Mantra"
            value={ans}
            onChange={(ev) => setAns(ev.target.value)}
          />
        </p>
        <p>
          <a id="butt" onClick={() => {
              setTimeout(()=>{checkAns();},2000)
          }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enter
          </a>
        </p>
      </form>
      <br />
      <br />
      <br />
      <br />
      <div style={{ position: "absolute", bottom: "40px" }}>
        <div style={{ position: "absolute", bottom: "50vh", left: "7vw" }}>
          <Hints
            hidden={hidden1}
            puzname={"puzzle_8"}
            hintname="Hint 1"
            hintdesc={
              "Try going back a few puzzles and remember what you were shown and input it down below."
            }
          />
          <Hints
            hidden={hidden2}
            puzname={"puzzle_8"}
            hintname="Hint 2"
            hintdesc={quoteExchange.getCurQuote()}
          />
        </div>
        <div style={{ height: "8vh" }}>
          <Button
            primary
            onClick={() => {
              setHidden1(!hidden1);
              setHidden2(true);
            }}
          >
            Hint 1
          </Button>
          <Button
            secondary
            onClick={() => {
              setHidden2(!hidden2);
              setHidden1(true);
            }}
          >
            Hint 2
          </Button>
        </div>
      </div>
    </div>
  );
}
