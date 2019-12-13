import React from 'react';
import uuidv4 from 'uuid/v4';
import Header from './components/Header';
import Color from './components/Color';
import Generate from './components/Generate';
import WordList from './components/WordList';
import Card from './components/Card';
import { darkRed, lightRed, darkOrange, lightOrange, darkYellow, lightYellow,
         darkGreen, lightGreen, darkBlue, lightBlue, darkPurple, lightPurple } from './css/colors';
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
        return {cards: [...prevState.cards, <Card key={uuidv4()} getColor={this.getColor} />]};
      });
    }
  }

  getColor = () => {
    return this.state.colors;
  }

  setColors = (e) => {
    console.log(e.target.style.backgroundColor);
    switch (e.target.style.backgroundColor) {
      case (darkRed.backgroundColor):
        this.setState({colors: [darkRed, lightRed]});
        break;
      case (darkOrange.backgroundColor):
        this.setState({colors: [darkOrange, lightOrange]});
        break;
      case (darkYellow.backgroundColor):
        this.setState({colors: [darkYellow, lightYellow]});
        break;
      case (darkGreen.backgroundColor):
        this.setState({colors: [darkGreen, lightGreen]});
        break;
      case (darkBlue.backgroundColor):
        this.setState({colors: [darkBlue, lightBlue]});
        break;
      case (darkPurple.backgroundColor):
        this.setState({colors: [darkPurple, lightPurple]});
        break;
      default:
        this.setState({color: [{backgroundColor: 'black'}, {backgroundColor: 'white'}]});
    }
  }

  render() {
    return (
      <div id="main" style={this.state.colors[1]}>
        <Header />
        <Color setColors={this.setColors} color={this.state.colors[0]}/>
        <Generate generateWords={this.addCards} colors={this.state.colors} />
        <WordList wordList={this.state.cards}/>      
      </div>
    );
  }
}

export default App;
