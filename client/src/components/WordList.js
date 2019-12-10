import React from 'react';
import uuidv4 from 'uuid/v4';

function WordList(props) {
  console.log(props.wordList);
  let words = [];
  for (const key of Object.keys(props.wordList)) {
    words.push(props.wordList[key]);
  }
  words = words.map(word => <li key={uuidv4()}>{word}</li>);

  return (
    <ul>{words}</ul>
  );
}

export default WordList;
