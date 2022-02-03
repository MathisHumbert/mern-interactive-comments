const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  content: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  score: {
    type: Number,
    default: 0,
  },
  user: {
    type: Object,
  },
  replies: {
    type: Object,
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
