const FavsModel = require('./model');

module.exports = {

    addList: async (req, res) => {
        try {
            const { _id } = req.userData;
            const { name, favs } = req.body;
            const newFav = new FavsModel({ user: _id, name, favs });
            await newFav.save();
            res.status(200).json({ success: true, data: newFav });
        } catch (error) {
            res.send(error.message);
        }
    },

    getAllLists: async (req, res) => {
        try {
            const { _id } = req.userData;
            const favs = await FavsModel.find({ user: _id });
            res.status(200).json({ success: true, data: favs });
        } catch (error) {
            res.send(error.message);
        }
    },

    getList: async (req, res) => {
        try {
            const idFav = req.params.id;
            const favs = await FavsModel.find({ _id: idFav });
            res.status(200).json({ success: true, data: favs });
        } catch (error) {
            res.send(error.message);
        }

    },

    deleteList: async (req, res) => {
        try {
            const favId = req.params.id;
            const removed = await FavsModel.deleteOne({ _id: favId });
            res.status(200).json({ success: true, message: 'Lista borrada con exito' });
        } catch (error) {
            res.send(error.message);
        }

    }
};