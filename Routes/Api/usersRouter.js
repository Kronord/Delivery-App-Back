const express = require("express");
const router = express.Router();
const {userController} = require('../../Controllers/users/userController');
const {getUserController} = require('../../Controllers/users/getUserController');


router.post("/user", userController);
router.post("/get/user", getUserController);

module.exports = router;
