import React from 'react';
import uuidv4 from 'uuid/v4';

function WordList(props) {
  console.log(props.wordList);
  let words = [];
  for (const [key, value] of Object.entries(props.wordList)) {
    let defs = value.slice(0, value.length - 2);
    let pos = value[value.length - 1];
    defs = defs.map(def => <li key={uuidv4()}>{def}</li>)
    const together = <div><h2>{key}</h2><h3>{pos}</h3><p>{defs}</p></div>;
    words.push(together);
  }

  return (
    <ul>{words}</ul>
  );
}

export default WordList;
