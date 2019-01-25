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

