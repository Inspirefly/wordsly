import React from 'react';
import '../css/WordList.css';
import './Card';

function WordList(props) {
  return (
    <div id="wordlist">{props.wordList}</div>
  );
}

export default WordList;
