const mongoose = require('mongoose');

const ReplySchema = mongoose.Schema({
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
});

const MessageSchema = mongoose.Schema({
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
  replies: [ReplySchema],
});

module.exports = mongoose.model('Message', MessageSchema);
module.exports = mongoose.model('Reply', ReplySchema);
