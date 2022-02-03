const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('back end');
});

const port = 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
