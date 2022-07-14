const {Schema, model} = require("mongoose");

const userSchema = Schema({
    name: {
        type: String,
        required: ['Name is required', true],
    },
    email: {
        type: String,
        required: ['Email is required', true],
    },
    phone: {
        type: String,
        required: ['Phone is required', true],
    },
    address: {
        type: String,
        required: ['Address is required', true],
    },
    order: {
        type: Object,
        required: true,
    }
});

const User = model("User", userSchema);

module.exports = {User};