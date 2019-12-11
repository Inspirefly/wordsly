const express = require('express');
const fetch = require('node-fetch');
const words = require('../../api/wordlist.json');

const router = express.Router();

const words_keys = Object.keys(words);
function getRandomWord() {
  const ranNum = Math.floor(Math.random() * words_keys.length);
  return words[ranNum];
}

router.get('/', (req, res) => {res.json(words)});
router.get('/:num', async (req, res) => {
  let wordList = {};
  for (let i = 0; i < req.params.num; i++) {
    let def = undefined;
    let word;
    while (def === undefined) {
      word = getRandomWord();
      def = await getDef(word);
      console.log(def);
    }

    wordList[word] = def;
  }
  res.json(wordList);
});

async function getDef(word) {
  console.log(`word: ${word}`);
  try {
    const data = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DICT_KEY}`);
    const json = await data.json();
    const def = await json[0].shortdef;
    return def;
  } catch(err) {
    console.log(err);
    return undefined;
  }
}


module.exports = router;
