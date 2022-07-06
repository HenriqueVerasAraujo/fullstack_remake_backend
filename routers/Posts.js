const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const tokenValidation = require('../middleware/tokenValidation');

// Create new post:
router.post('/createpost',tokenValidation, PostController.createPost);

module.exports = router;