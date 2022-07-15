const {mcDonald} = require('../../Models/mcDonaldsModel');

const mcDonaldsController = async (req, res, next) => {
    try {
        const products = await mcDonald.find();
        if (!products) {
            return res.status(404).json({message: "Not found"});
        };
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = {mcDonaldsController};