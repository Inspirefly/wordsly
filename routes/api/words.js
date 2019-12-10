const express = require('express');
const words = require('../../api/words_dictionary.json');

const router = express.Router();

const words_keys = Object.keys(words);
function getRandomWord() {
  const ranNum = Math.floor(Math.random() * words_keys.length);
  return words_keys[ranNum];
}

router.get('/', (req, res) => {res.json(words)});
router.get('/:num', (req, res) => {
  let wordsArr = [];
  for (let i = 0; i < req.params.num; i++) {
    wordsArr.push(getRandomWord());
  }
  res.json(wordsArr);
});


module.exports = router;
