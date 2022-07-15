const express = require('express');
const router = express.Router();
const {productController} = require('../../Controllers/products/productsController');
const {mcDonaldsController} = require('../../Controllers/products/mcDonaldsController');
const {kfcController} = require('../../Controllers/products/kfcController');
const {pizzaController} = require('../../Controllers/products/pizzaController');
const {sushiyaController} = require('../../Controllers/products/sushiyaController');

router.get("/products", productController);
router.get("/mcDonalds", mcDonaldsController);
router.get("/kfc", kfcController);
router.get("/pizza", pizzaController);
router.get("/sushiya", sushiyaController);

module.exports = router;