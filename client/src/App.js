import React from 'react';
import uuidv4 from 'uuid/v4';
import Header from './components/Header';
import Color from './components/Color';
import Generate from './components/Generate';
import WordList from './components/WordList';
import Card from './components/Card';
import { darkYellow, lightYellow } from './css/colors';
import './css/App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      colors: [darkYellow, lightYellow]
    }
  }

  addCards = (num) => {
    this.setState({cards: []});
    for (let i = 0; i < num; i++) {
      this.setState(prevState => {
        return {cards: [...prevState.cards, <Card key={uuidv4()} colors={this.state.colors} />]};
      });
    }
  }

  render() {
    return (
      <div id="main" style={this.state.colors[1]}>
        <Header />
        <Color />
        <Generate generateWords={this.addCards} colors={this.state.colors} />
        <WordList wordList={this.state.cards} />      
      </div>
    );
  }
}

export default App;
