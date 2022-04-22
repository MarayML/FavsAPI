const { hash, compare } = require("bcrypt");

const encryptPassword = async (password) => {
  return await hash(this.password, 10);
};

const comparePassword = async (passwordClient, encryptedPassword) => {
  return await compare(passwordClient, encryptedPassword);
};

module.exports = { encryptPassword, comparePassword };