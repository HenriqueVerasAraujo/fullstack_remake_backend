const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Find a user with the id:
// router.get('/getSingle', UserController.getSingle);

// Create User:
router.post('/createuser', UserController.createUser);
router.post('/login', UserController.login);

module.exports = router;
