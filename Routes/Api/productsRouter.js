const express = require('express');
const router = express.Router();
const {productController} = require('../../Controllers/productsController');

router.get("/products", productController);

module.exports = router;