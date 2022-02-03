require('dotenv').config();

const connectDB = require('./db/connect');
const Comment = require('./models/comment');

const jsonComments = require('./data.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Comment.deleteMany();
    await Comment.create(jsonComments);
    console.log('Sucess!!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
