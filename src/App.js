import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import YouTube from "react-youtube";

const characterCopy = characters

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    topScore: 0, 
    message: "",
    clicked: [],
    videoOptions: {}
  };


  componentDidMount() {
    this.setState({characters: this.shuffle(this.state.characters)})
  };


  shuffle = data => {
      for (let i = data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [data[i], data[j]] = [data[j], data[i]];
      }
      return data;
  };

  handleClick = id => {

    let videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      }
    };

    this.setState({
      characters: this.shuffle(characterCopy)
    });

    if (this.state.clicked.includes(id)) {
      this.setState({
        currentScore: 0,
        clicked: [],
        message: "You lost! \nClick a card to restart the game."
      });
    } else {
      this.setState({
        currentScore: this.state.currentScore + 1,
        topScore: this.state.topScore + 1,
        clicked: this.state.clicked.concat(id),
        message: ""
      }, () => {
        if (this.state.currentScore === 12) {
          this.setState({
            message: "You won!"
          });
        }
      });

      if (this.state.currentScore < this.state.topScore) {
        this.setState({
          topScore: this.state.topScore
        });
      }
    };

  };


  _onReady(event) {
    event.target.playVideo();
  }

  _onEnd(event) {
    event.target.playVideo();
  }


  render() {
    return (
     <div>
      <div className="video-background">
      <div className="video-foreground">
          <YouTube
            videoId="aook_jC2Wxc"
            opts={this.state.videoOptions}
            className="video-iframe"
            onReady={this._onReady}
            onEnd={this._onEnd}
          />
        </div>
      </div>

       <Navbar currentScore={this.state.currentScore} topScore={this.state.topScore} message={this.state.message}/>
       
       <div className="row justify-content-center no-gutters">

       {this.state.characters.map((character, i) => (
         <CharacterCard 
         video={this.backgroundVid}
         id={character.id}
         character={character}
         click={this.handleClick}
         key={i}
         />
       ))}
       </div>
     </div>
    );
  }
}

export default App;




