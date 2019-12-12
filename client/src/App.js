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
    document.body.style.cursor = 'wait';
    const res = await fetch('/api/words/' + String(num));
    const wordList = await res.json();
    this.setState({wordList});
    document.body.style.cursor = 'default';
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
