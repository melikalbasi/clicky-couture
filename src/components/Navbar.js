import React from "react";

const Navbar = props =>
  <div>
    <div className="jumbotron"><text>
      <h1 className="row justify-content-center">Clicky Couture</h1>
      <p className="row justify-content-center" id="rules">Let's test your memory of the show. Click any card to start the game.</p>
      <hr></hr><p className="row justify-content-center" id="scores">
        Current Score: {props.currentScore} | Top Score: {props.topScore}</p>
      <p className="row justify-content-center" id="message">
        {props.message}</p></text>
    </div>
  </div>

export default Navbar;
