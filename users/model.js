const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true,  minLength: 6 },
    },
    { timestamps: true }
);

const usersModel = mongoose.model('users', schema);
module.exports = usersModel;