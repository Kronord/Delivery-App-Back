const express = require('express');
const router = express.Router();
const {productController} = require('../../Controllers/productsController');
const {phoneController} = require('../../Controllers/phonesController');

router.get("/products", productController);
router.get("/phones", phoneController);

module.exports = router;