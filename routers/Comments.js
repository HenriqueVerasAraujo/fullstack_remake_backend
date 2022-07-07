const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');
const tokenValidation = require('../middleware/tokenValidation');

// Create new Comment:
router.post('/createComment',tokenValidation, CommentController.createComment);

// Get all Comments (home):
// router.get('/getall/:id', CommentController.getAll);

// // Get single Comment (singleCommentPage):
// router.get('/getsingle/:id', CommentController.getSingle);

module.exports = router;