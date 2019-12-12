import React from 'react';
import '../css/WordList.scss';
import './Card';

function WordList(props) {
  return (
    <div id="wordlist">{props.wordList}</div>
  );
}

export default WordList;
