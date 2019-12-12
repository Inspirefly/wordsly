import React from 'react';
import uuidv4 from 'uuid/v4';
import '../css/Card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      pos: "",
      defs: []
    }
  }

  componentDidMount() {
    fetch('/api/words/1')
      .then(res => res.json())
      .then((word) => {
        for (const [key, value] of Object.entries(word)) {
          let pos = value[value.length - 1];
          let defs = value.slice(0, -1).map(def =>
            <li key={uuidv4()}>{def}</li>
          );

          this.setState({word: key, pos, defs});
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.word ? (
          <div className="card">
            <a href={`https://www.merriam-webster.com/dictionary/${this.state.word}`} target="_blank" rel="noopener noreferrer">
              <div className="card-container">
                <div className="side-stripe"></div>
                <div className="word-info">
                  <h2>{this.state.word}</h2>
                  <h3>{this.state.pos}</h3>
                  <ul>{this.state.defs}</ul>
                </div>
              </div>
            </a>
          </div>
        ) : ('')}
      </div>
    );
  }
}

export default Card;
