const { hash, compare } = require("bcryptjs");

const encryptPassword = async (password) => {
  return await hash(password, 10);
};

const comparePassword = async (passwordClient, encryptedPassword) => {
  return await compare(passwordClient, encryptedPassword);
};

module.exports = { encryptPassword, comparePassword };