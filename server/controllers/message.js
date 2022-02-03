const Message = require('../models/Message');

const getComments = (req, res) => {
  res.send('get comments');
};

const createReply = (req, res) => {
  res.send('create reply');
};

const deleteComment = (req, res) => {
  res.send('delete comment');
};

const toggleUpvote = (req, res) => {
  res.send('toggle upvote');
};

module.exports = { getComments, createReply, deleteComment, toggleUpvote };
