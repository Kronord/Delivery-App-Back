const {Schema, model} = require("mongoose");

const mcDonaldsSchema = Schema({
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

const mcDonald = model("mcDonald", mcDonaldsSchema);

module.exports = {mcDonald};