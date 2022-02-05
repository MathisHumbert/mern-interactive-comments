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

router
  .route('/')
  .get(getComments)
  .post(createMessage)
  .patch(editMessage)
  .delete(deleteComment);
router.patch('/upvote', toggleUpvote);
router.patch('/:id', createReply);

module.exports = router;
