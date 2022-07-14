const express = require("express");
const router = express.Router();
const { User } = require("../../Models/usersModel");

router.post("/user", async (req, res, next) => {
  try {
    const { name, email, phone, address, order } = req.body;
    const oneUser = await User.findOne({ name });
    if (oneUser) {
      const newArr = oneUser.order.products.concat(order.products);
      const newTotal = (oneUser.order.total += order.total);
      await User.findByIdAndUpdate(oneUser._id, {order: {products: newArr, total: newTotal}});
      return res.status(200).json({ message: "Successfull added" });
    }
    const user = new User({
      name,
      email,
      phone,
      address,
      order,
    });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
