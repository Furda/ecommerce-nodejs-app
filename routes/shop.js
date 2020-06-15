// core Node.js modules
const path = require('path');

//third-party modules
const express = require('express');
const router = express.Router();

// local files
const rootDir = require('../util/path');
const adminData = require('./admin');


router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { 
        prods: products,
        pageTitle: 'Shop',
        path: '/',
    });
});

module.exports = router;