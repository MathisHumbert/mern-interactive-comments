require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const path = require('path');

const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');

const connectDB = require('./db/connect');
const commentRouter = require('./routes/comment');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 400, // limit each IP to 100 requests per windowMs
  })
);

app.use(
  express.static(
    path.join(
      '/Users/mathis/Desktop/mern-interactive-comments/',
      './client/build'
    )
  )
);

app.use('/api/v1/comments', commentRouter);

app.get('*', function (requests, response) {
  response.sendFile(
    path.resolve(
      '/Users/mathis/Desktop/mern-interactive-comments/',
      './client/build',
      'index.html'
    )
  );
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
