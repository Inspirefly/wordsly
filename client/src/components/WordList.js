import React from 'react';
import uuidv4 from 'uuid/v4';
import '../css/WordList.css';

function WordList(props) {
  console.log(props.wordList);
  let words = [];
  for (const [key, value] of Object.entries(props.wordList)) {
    let defs = value.slice(0, -1);
    let pos = value[value.length - 1];
    defs = defs.map(def =>
        <li key={uuidv4()}>{def}</li>
      );
    const together = (
      <div className="card" key={uuidv4()}>
        <a href={`https://www.merriam-webster.com/dictionary/${key}`} target="_blank" rel="noopener noreferrer">
          <div className="card-container">
            <div className="side-stripe"></div>
            <div className="word-info">
              <h2>{key}</h2>
              <h3>{pos}</h3>
              <ul>{defs}</ul>
            </div>
          </div>
        </a>
      </div>
    );
    words.push(together);
  }

  return (
    <div id="wordlist">{words}</div>
  );
}

export default WordList;
