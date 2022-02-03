const express = require('express');
const router = express.Router();

const {
  getComments,
  createReply,
  deleteComment,
  toggleUpvote,
} = require('../controllers/comment');

router.get('/', getComments);
router.patch('/upvote/:id', toggleUpvote);
router.route('/:id').patch(createReply).delete(deleteComment);

module.exports = router;
