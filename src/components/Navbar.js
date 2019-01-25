import React from "react";

const Navbar = props => {
  return (
    <div>
      <p>
        Current Score: {props.currentScore}
      </p>
      <p>
        Top Score: {props.topScore}
      </p>
    </div>
  )
}

export default Navbar;
