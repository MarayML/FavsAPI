const FavsModel = require('./model');

module.exports = {

    addList: async (req, res) => {
        try {
            const { user, name, favs } = req.body;
            const newFav = new FavsModel({ user, name, favs });
            await newFav.save();
            res.status(200).json({ success: true, data: newFav });
        } catch (error) {
            res.send(error.message);
        }
    },

    getAllLists: async (req, res) => {
        try {
            const user = req.query.user;
            const favs = await FavsModel.find({ user });
            res.status(200).json({ success: true, data: favs });
        } catch (error) {
            res.send(error.message);
        }
    },

    getList: async (req, res) => {
        try {
            const user = req.query.user;
            const idFav = req.params.id;
            const favs = await FavsModel
                .findOne({ owner: user })
                .select({ favs: { $elemMatch: { _id: idFav } } });
            res.status(200).json({ success: true, data: favs });
        } catch (error) {
            res.send(error.message);
        }

    },

    deleteList: async (req, res) => {
        try {
            const { _favId } = req.params.id;
            const removed = await FavsModel.deleteOne({ _id: _favId });
            res.status(200).json({ success: true, data: removed });
        } catch (error) {
            res.send(error.message);
        }

    }
};