const Comment = require('../models/comment');
const { StatusCodes } = require('http-status-codes');

const getComments = async (req, res) => {
  const comments = await Comment.find({});
  res.status(StatusCodes.OK).json(comments);
};

const createReply = async (req, res) => {
  const body = req.body;
  const { id } = req.params;

  const comment = await Comment.findOne({ id });
  const newReplies = [...comment.replies, body];
  comment.replies = newReplies;

  comment.save();

  res.status(StatusCodes.OK).json({ msg: 'Reply Created' });
};

const deleteComment = (req, res) => {
  res.send('delete comment');
};

const toggleUpvote = (req, res) => {
  res.send('toggle upvote');
};

module.exports = { getComments, createReply, deleteComment, toggleUpvote };
