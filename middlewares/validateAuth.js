const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers['authorization']
            ? req.headers['authorization'].replace('Bearer ', '')
            : undefined;
        const decodedToken = jwt.verify(token, 'makeitreal');
        req.userData = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Unauthorized'});
    }
};