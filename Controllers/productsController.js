const {Product} = require('../Models/productsModel');

const productController = async (req, res, next) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(404).json({message: "Not found"});
        };
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = {productController};