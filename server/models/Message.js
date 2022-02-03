const mongoose = require('mongoose');

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
  replies: {
    type: Object,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
