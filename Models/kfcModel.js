const {Schema, model} = require("mongoose");

const kfcSchema = Schema({
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

const Kfc = model("Kfc", kfcSchema);

module.exports = {Kfc};