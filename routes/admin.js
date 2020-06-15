const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

// path: /admin/add-product
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// path: /admin/product --> POST
router.post('/add-product', adminController.postAddProduct);


module.exports = router;