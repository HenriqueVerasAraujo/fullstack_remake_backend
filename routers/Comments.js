const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');
const tokenValidation = require('../middleware/tokenValidation');

// Create new Comment:
router.post('/createcomment',tokenValidation, CommentController.createComment);

// Get all Comments (singlePost):
router.get('/getall/:id', CommentController.getAll);


// Delete a single Comment: 
router.delete('/delete/:id', CommentController.deleteComment);
// // Get single Comment (singleCommentPage):
// router.get('/getsingle/:id', CommentController.getSingle);

module.exports = router;