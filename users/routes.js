const express = require('express');
const router = express.Router();
const { signIn, signUp } = require('./controller');

router.post('/user/register', signUp);
router.post('/user/login', signIn);

module.exports = router;