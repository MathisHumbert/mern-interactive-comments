const express = require('express');
const app = express();

// routers
const messageRouter = require('./routes/message');

app.use('/api/v1/message', messageRouter);

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
