import React from 'react';
import '../css/Generate.css';

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: ''
    }
  }
  
  handleInput = (e) => {
    this.setState({num: e.target.value});
  }

  generate = (e) => {
    if (e.which === 13)
      this.generateWords(e);
  }

  generateWords = (e) => {
    if (Number.isInteger(Number(this.state.num)) && this.state.num >= 1 && this.state.num <= 100)
      this.props.generateWords(this.state.num);
  }

  render() {
    return (
      <div id="generate">
        <input id="number" type="text" min="1" max="100" placeholder="1-100" value={this.state.num} onChange={this.handleInput} onKeyUp={this.generate}/>
        <button id="gen-button" onClick={this.generateWords}>GENERATE</button>
      </div>
    );
  }
}

export default Generate;
