const {Phone} = require('../Models/phonesModel');

const phoneController = async (req, res, next) => {
    try {
        const products = await Phone.find();
        if (!products) {
            return res.status(404).json({message: "Not found"});
        };
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = {phoneController};