const Comment = require('../models/comment');
const { StatusCodes } = require('http-status-codes');

const getComments = async (req, res) => {
  const comments = await Comment.find({});
  res.status(StatusCodes.OK).json(comments);
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
