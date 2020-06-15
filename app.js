const path = require('path');

const rootDir = require('./util/path');

// third-party apps
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//File containing the routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// body parser 
app.use(bodyParser.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(rootDir, 'public')));

// Routes
// only can reach with /admin/... paths
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

//listen for a port
app.listen(3000);
