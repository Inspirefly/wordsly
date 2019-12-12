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
    let pos;
    let word;
    while (def === undefined) {
      word = getRandomWord();
      [def, pos] = await getDef(word);
    }

    def.push(pos);
    console.log(`-=+=-
 word: ${word}
 def: ${def}`);
    wordList[word] = def;
  }
  res.json(wordList);
});

async function getDef(word) {
  try {
    const data = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DICT_KEY}`);
    const json = await data.json();
    const def = await json[0].shortdef;
    const pos = await json[0].fl;
    return [def, pos];
  } catch(err) {
    console.log(err);
    return undefined;
  }
}

module.exports = router;
