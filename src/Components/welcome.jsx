import React, { useState } from "react";
import "../Kenobi.css";
import "../style.css";
import { Link } from "react-router-dom";
import { loginExchange } from "../Globals.js";
import { Button, Input, Popup } from "semantic-ui-react";
import Sound from "react-sound";
import { disableBackWindow } from "../User/disableBackWindow";
const Welcome = () => {
  disableBackWindow(window);
  loginExchange.setUserName("taran");
  loginExchange.setPassWord("taranu");

  document.oncontextmenu = function (e) {
    e.preventDefault();
  };
  function storeLogin(ev) {
    loginExchange.setUserName(document.getElementById("username").value);
    loginExchange.setPassWord(document.getElementById("password").value);
    // loginExchange.setNickName(document.getElementById("nickname").value)
  }
  return (
    <div>
      <img src="/images/astro.gif" alt="Snow" style={{ width: "100%" }} />
      <div style={{ "text-align": "center" }}>
        <form class="form_login" style={{ width: "1000px" }}>
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
            <a href="/Home">
              <Button
                id="submitbutton"
                type="button"
                onClick={storeLogin}
                color="red"
              >
                Submit
              </Button>
            </a>
          </p>
        </form>
      </div>
      {/* <Soundo /> */}
    </div>
  );
};
export default Welcome;
