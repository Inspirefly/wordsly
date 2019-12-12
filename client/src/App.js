import React from 'react';
import Generate from './components/Generate';
import Header from './components/Header';
import WordList from './components/WordList';
import './css/App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: {}
    }
  }

  generateWords = async (num) => {
    this.setState({wordList: {}});
    let res;
    let word;
    for (let i = 0; i < num; i++) {
      res = await fetch('/api/words/1');
      word = await res.json();
      this.setState(prevState => {
        return {wordList: {...prevState.wordList, ...word}};
      });
    }
  }

  render() {
    return (
      <div id="main">
        <Header />
        <Generate generateWords={this.generateWords} />
        <WordList wordList={this.state.wordList}/>      
      </div>
    );
  }
}

export default App;
