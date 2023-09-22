const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my basic Express website!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
