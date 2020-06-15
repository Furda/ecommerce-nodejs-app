const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

// path: /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// path: /admin/product --> POST
router.post('/product', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;