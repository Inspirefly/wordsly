import React from 'react';

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }
  handleInput = (e) => {
    this.setState({num: e.target.value});
  }

  generateWords = (e) => {
    this.props.generateWords(this.state.num);
  }

  render() {
    return (
      <div>
        <input type="number" min="1" value={this.state.num} onChange={this.handleInput}/>
        <button onClick={this.generateWords}>generate</button>
      </div>
    );
  }
}

export default Generate;
