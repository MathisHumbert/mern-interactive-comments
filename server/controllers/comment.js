const Comment = require('../models/comment');
const { StatusCodes } = require('http-status-codes');

const getComments = async (req, res) => {
  const comments = await Comment.find({});
  res.status(StatusCodes.OK).json(comments);
};

const createMessage = async (req, res) => {
  const comment = req.body;

  await Comment.create(comment);

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

const editMessage = async (req, res) => {
  const { content: newContent } = req.body;
  const { id, replyID } = req.query;

  if (replyID === 'undefined') {
    await Comment.findOneAndUpdate({ id }, { content: newContent });
  } else {
    let tempComment = await Comment.findOne({ id });
    const newReplies = tempComment.replies.map((item) => {
      if (item.id === replyID) {
        item.content = newContent;
      }
      return item;
    });
    await Comment.findOneAndUpdate({ id }, { replies: newReplies });
  }

  res.status(StatusCodes.OK).json({ msg: 'Message Updated' });
};

const deleteComment = async (req, res) => {
  const { id, replyID } = req.query;

  if (replyID === 'undefined') {
    await Comment.findOneAndDelete({ id });
  } else {
    let tempComment = await Comment.findOne({ id });
    const newReplies = tempComment.replies.filter(
      (item) => item.id !== replyID
    );
    await Comment.findOneAndUpdate({ id }, { replies: newReplies });
  }

  res.status(StatusCodes.OK).json({ msg: 'Message Deleted' });
};

const toggleUpvote = async (req, res) => {
  const { action, id, replyID } = req.body;

  const comment = await Comment.findOne({ id });
  if (!replyID) {
    let newScore;
    if (action === 'add') {
      newScore = comment.score + 1;
    } else {
      newScore = comment.score - 1;
    }
    if (newScore < 0) {
      newScore = 0;
    }
    await Comment.findOneAndUpdate({ id }, { score: newScore });
  } else {
    const newReplies = comment.replies.map((item) => {
      if (item.id === replyID) {
        if (action === 'add') {
          item.score += 1;
        } else {
          item.score -= 1;
        }
        if (item.score < 0) {
          item.score = 0;
        }
      }
      return item;
    });
    await Comment.findOneAndUpdate({ id }, { replies: newReplies });
  }

  res.send('toggle upvote');
};

module.exports = {
  getComments,
  createReply,
  deleteComment,
  toggleUpvote,
  createMessage,
  editMessage,
};
