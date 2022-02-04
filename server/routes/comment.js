const express = require('express');
const router = express.Router();

const {
  getComments,
  createReply,
  deleteComment,
  toggleUpvote,
  createMessage,
  editMessage,
} = require('../controllers/comment');

router.route('/').get(getComments).post(createMessage).patch(editMessage);
router.patch('/upvote/:id', toggleUpvote);
router.route('/:id').patch(createReply).delete(deleteComment);

module.exports = router;
