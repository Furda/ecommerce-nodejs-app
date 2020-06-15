// core Node.js modules
const path = require('path');

// third-party apps
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// local files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

// set template engine
app.set('view engine', 'ejs' );

// where to find the templates (path) (default is set to views folder)
app.set('views', 'views');

// body parser 
app.use(bodyParser.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// only can reach with /admin/... paths
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// page not found error
app.use(errorController.get404);

//listen for a port
app.listen(3000);
