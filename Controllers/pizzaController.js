const {PizzaHouse} = require('../Models/pizzaHouseModel');

const pizzaController = async (req, res, next) => {
    try {
        const products = await PizzaHouse.find();
        if (!products) {
            return res.status(404).json({message: "Not found"});
        };
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

module.exports = {pizzaController};