const {Sushiya} = require('../../Models/sushiyaModel');

const sushiyaController = async (req, res, next) => {
    try {
        const products = await Sushiya.find();
        if (!products) {
            return res.status(404).json({message: "Not found"});
        };
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = {sushiyaController};