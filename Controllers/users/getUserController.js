const { User } = require("../../Models/usersModel");

const getUserController = async (req, res, next) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: "Not found"});
        };
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {getUserController};