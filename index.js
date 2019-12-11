const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'production')
  app.use(express.static(path.join(__dirname, 'client/build')));
if (process.env.NODE_ENV !== 'production')
  require('dotenv').config();

app.use('/api/words', require('./routes/api/words'));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));