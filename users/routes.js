const express = require('express');
const router = express.Router();
const { signIn, signUp } = require('./controller');

router.post('/auth/local/register', signUp);
router.post('/auth/local/login', signIn);

module.exports = router;