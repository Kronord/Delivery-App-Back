const express = require('express');
const router = express.Router();
const {productController} = require('../../Controllers/productsController');
const {mcDonaldsController} = require('../../Controllers/mcDonaldsController');

router.get("/products", productController);
router.get("/phones", mcDonaldsController);

module.exports = router;