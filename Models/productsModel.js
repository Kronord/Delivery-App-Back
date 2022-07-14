const {Schema, model} = require("mongoose");

const productSchema = Schema({
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

const Product = model("Product", productSchema);

module.exports = {Product};