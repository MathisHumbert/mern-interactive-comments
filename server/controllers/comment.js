const Comment = require('../models/comment');

const getComments = (req, res) => {
  const comments = await Comment.find({});
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
