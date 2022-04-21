const { hash, compare } = require("bcrypt");

const encryptPassword = async (password) => {
  return await hash(this.password, 10);
};

const comparePassword = async (passwordClient, encryptedPassword) => {
  return await compare(passwordClient, encryptedPassword);
};

module.exports = { encryptPassword, comparePassword };

/* const config = require('../config');

const { pagination, sort } = config;

const paginationParseParams = ({
  page = pagination.page,
  limit = pagination.limit,
  skip = pagination.skip
}) => {
  return {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    skip: skip ? parseInt(skip, 10) : (page - 1) * limit,
  }
};

const sortParseParams = ({
  sortBy = sort.sortBy.default,
  direction = sort.direction.default
}, fields) => {
  const docFields = [...Object.getOwnPropertyNames(fields), ...sort.sortBy.fields];
  const directionOptions = sort.direction.options;
  return {
    sortBy: docFields.includes(sortBy) ? sortBy : sort.sortBy.default,
    direction: directionOptions.includes(direction) ? direction : sort.direction.default,
  }
};

const sortingStr = (sortBy, direction) => {
  const dir = direction === sort.direction.default ? '-' : '';
  return `${dir}${sortBy}`
}

module.exports = {
  paginationParseParams,
  sortParseParams,
  sortingStr
}; */
