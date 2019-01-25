import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    topScore: 0
  }


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


    // if (correctGuess) --ternary oper 
    // check if guess is correct, run function that handles correct guess (send it method of charactersCopy)

    // update current score
    // check if currentscore > topscore
    // display topscore



    // if not correct, run method that resets game
    // handle incorrect click


  }


  render() {
    return (
     <div>
       <Navbar currentScore={this.state.currentScore} topScore={this.state.topScore}/>
       {this.state.characters.map(character => (
         <CharacterCard 
         key={character.id}
         character={character}
         click={this.handleClick}
         />
       ))}
     </div>
    );
  }
}

export default App;

