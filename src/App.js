import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import YouTube from "react-youtube";

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    topScore: 0, 
    message: "",
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


    // handle correct click
    console.log(id);
    let correctGuess = false;
    var charactersCopy = this.state.characters.map(character => {
      const characterCopy = {...character}
      if (characterCopy.id === id) {
        if (characterCopy.clicked = false) {
          characterCopy.clicked = true;
          correctGuess = true;
          
        }
      }
      return characterCopy;

    })

    if (correctGuess === true) {
      this.state.currentScore++;

      if (this.state.topScore < this.state.currentScore){
        this.state.topScore = this.state.currentScore;
      }
      this.state.message="";
      this.state.shuffle(characters)
      // this.setState({currentScore, topScore, characters, message, videoOptions});
    } else {
      // this.state.youLost();
    }

  };

  youLost = () => {
    if (this.state.topScore < this.state.currentScore){
      this.state.topScore = this.state.currentScore;
    }
    else if (this.state.currentScore === 12) {
      console.log("You won!");
      this.state.message="Woo! You won! Click any picture to play again."
    } else {
      this.state.message = "Aw, ya lost."
    }
    this.state.currentScore = 0;
    this.state.characters.map((character) => {
      return character.clicked = false;
    });
      // this.setState({currentScore, topScore, characters, message, videoOptions});  
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
       <Navbar currentScore={this.state.currentScore} topScore={this.state.topScore}/>
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
    );
  }
}

export default App;

