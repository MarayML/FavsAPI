const express = require('express');
const router = express.Router();
const validateAuth = require('../middlewares/validateAuth');

const {
    addList,
    getAllLists,
    getList,
    deleteList,
} = require('./controller');

router.get('/api/favs', validateAuth, addList);
router.put('/api/favs/:id', validateAuth, getList);
router.get('/api/favs', validateAuth, getAllLists);
router.delete('/api/favs/:id', validateAuth, deleteList);

module.exports = router;