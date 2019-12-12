import React from 'react';
import uuidv4 from 'uuid/v4';
import Generate from './components/Generate';
import Header from './components/Header';
import WordList from './components/WordList';
import Card from './components/Card';
import './css/App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  addCards = (num) => {
    this.setState({cards: []});
    for (let i = 0; i < num; i++) {
      this.setState(prevState => {
        return {cards: [...prevState.cards, <Card key={uuidv4()} />]};
      });
    }
  }

  render() {
    return (
      <div id="main">
        <Header />
        <Generate generateWords={this.addCards} />
        <WordList wordList={this.state.cards}/>      
      </div>
    );
  }
}

export default App;
