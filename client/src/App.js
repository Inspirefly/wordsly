import React from 'react';
import Generate from './components/Generate';
import Header from './components/Header';
import WordList from './components/WordList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: {}
    }
  }

  generateWords = (num) => {
    fetch('/api/words/' + String(num))
      .then(res => res.json())
      .then(wordList => this.setState({wordList}));
  }

  render() {
    return (
      <div>
        <Header />
        <Generate generateWords={this.generateWords} />
        <WordList wordList={this.state.wordList}/>      
      </div>
    );
  }
}

export default App;
