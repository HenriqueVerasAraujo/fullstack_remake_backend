const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const tokenValidation = require('../middleware/tokenValidation');

// Create new post:
router.post('/createpost',tokenValidation, PostController.createPost);

// Get all Posts (home):
router.get('/getall', PostController.getAll);

// Get single Post (singlePostPage):
router.get('/getsingle/:id', PostController.getSingle);

// Delete a single Post (home):
router.delete('/delete/:id', PostController.deletePost);

module.exports = router;