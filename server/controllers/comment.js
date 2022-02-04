const Comment = require('../models/comment');
const { StatusCodes } = require('http-status-codes');

const getComments = async (req, res) => {
  const comments = await Comment.find({});
  res.status(StatusCodes.OK).json(comments);
};

const createMessage = async (req, res) => {
  const comment = req.body;

  const comments = await Comment.create(comment);

  res.status(StatusCodes.CREATED).json({ msg: 'Message Created' });
};

const createReply = async (req, res) => {
  const reply = req.body;
  const { id } = req.params;

  const comment = await Comment.findOne({ id });
  const newReplies = [...comment.replies, reply];
  comment.replies = newReplies;

  comment.save();

  res.status(StatusCodes.CREATED).json({ msg: 'Reply Created' });
};

const deleteComment = async (req, res) => {
  res.send('delete comment');
};

const toggleUpvote = (req, res) => {
  res.send('toggle upvote');
};

module.exports = {
  getComments,
  createReply,
  deleteComment,
  toggleUpvote,
  createMessage,
};
