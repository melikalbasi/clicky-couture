import React from "react";

const Navbar = props => {
  return (
    <div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Start the game by clicking a card!</h1>
          <p className="lead"><p>
            Current Score: {props.currentScore}
          </p>
            <p>
              Top Score: {props.topScore}
            </p>
            <p>
            {props.message}</p></p>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
