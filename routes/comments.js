const express = require('express');
const router = express.Router();
const comments_controller = require('../controllers/comments');

router.delete('/:id/delete', comments_controller.delete_comment_delete);

module.exports = router;