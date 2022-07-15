const {Schema, model} = require("mongoose");

const sushiyaSchema = Schema({
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

const Sushiya = model("Sushiya", sushiyaSchema);

module.exports = {Sushiya};