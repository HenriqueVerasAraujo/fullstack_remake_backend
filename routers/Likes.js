const express = require('express');
const router = express.Router();
const LikeController = require('../controllers/LikeController');
const tokenValidation = require('../middleware/tokenValidation');

// Like or unlike:
router.post('/',tokenValidation, LikeController.addLike);

// // Get all Posts (home):
// router.get('/getall', PostController.getAll);

// // Get single Post (singlePostPage):
// router.get('/getsingle/:id', PostController.getSingle);

// // Delete a single Post (home):
// router.delete('/delete/:id', PostController.deletePost);

module.exports = router;