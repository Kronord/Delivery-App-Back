const express = require('express');
const router = express.Router();
const {productController} = require('../../Controllers/productsController');
const {mcDonaldsController} = require('../../Controllers/mcDonaldsController');
const {kfcController} = require('../../Controllers/kfcController');
const {pizzaController} = require('../../Controllers/pizzaController');
const {sushiyaController} = require('../../Controllers/sushiyaController');

router.get("/products", productController);
router.get("/mcDonalds", mcDonaldsController);
router.get("/kfc", kfcController);
router.get("/pizza", pizzaController);
router.get("/sushiya", sushiyaController);

module.exports = router;