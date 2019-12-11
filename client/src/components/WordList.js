import React from 'react';
import uuidv4 from 'uuid/v4';

function WordList(props) {
  console.log(props.wordList);
  let words = [];
  for (const [key, value] of Object.entries(props.wordList)) {
    let defs = value.map(def => <li key={uuidv4()}>{def}</li>)
    const together = <div><h2>{key}</h2><p>{defs}</p></div>;
    words.push(together);
  }

  return (
    <ul>{words}</ul>
  );
}

export default WordList;
