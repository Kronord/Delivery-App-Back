const {Schema, model} = require("mongoose");

const pizzaSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const PizzaHouse = model("PizzaHouse", pizzaSchema);

module.exports = {PizzaHouse};