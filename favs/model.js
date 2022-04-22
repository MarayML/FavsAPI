const mongoose = require('mongoose');
const { Schema } = mongoose;

const FavSchema = new Schema(
    {
        title: String,
        description: String,
        link: String,
    }
);

const schema = new Schema(
    {
        owner: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
        name: { type: String, required: true },
        favs: [{ type: FavSchema }],
    },
    { timestamps: true }
);

const favsModel = mongoose.model('favs', schema);
module.exports = favsModel;