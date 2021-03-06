const {Kfc} = require('../../Models/kfcModel');

const kfcController = async (req, res, next) => {
    try {
        const products = await Kfc.find();
        if (!products) {
            return res.status(404).json({message: "Not found"});
        };
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = {kfcController};