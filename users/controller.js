
const jwt = require('jsonwebtoken');
const UsersModel = require('./model');
const { encryptPassword, comparePassword } = require('../utils');
const { jwtKey } = require('../config');

module.exports = {
  signUp: async (req, res) => {
    try {
      const { email, password } = req.body;
      const encryptedPassword = await encryptPassword(password);
      const newUser = new UsersModel({ email, password: encryptedPassword });
      await newUser.save();
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      res.send(error.message);
    }
  },
  signIn: async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await UsersModel.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, message: 'Usuario no registrado' });
    } else {
      const isVerifyPassword = await comparePassword(password, user.password);
      if (!isVerifyPassword) {
        res.status(401).json({ success: false, message: 'Contraseña invalida' });
      } else {
        const token = jwt.sign(JSON.stringify(user), jwtKey);
        res.status(200).json({ success: true, data: user, meta: { token }, message: 'Bienvenido'});
      }
    }
  },
};