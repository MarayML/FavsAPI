const express = require('express');
const router = express.Router();
const validateAuth = require('../middlewares/validateAuth');

const {
    addList,
    getAllLists,
    getList,
    deleteList,
} = require('./controller');

router.post('/api/favs', validateAuth, addList);
router.get('/api/favs/:id', validateAuth, getList);
router.get('/api/favs', validateAuth, getAllLists);
router.delete('/api/favs/:id', validateAuth, deleteList);

module.exports = router;