// core Node.js modules
const path = require('path');

// third-party apps
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

// local files
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

// set template engine
app.set('view engine', 'ejs' );

// where to find the templates (path) (default is set to views folder)
app.set('views', 'views');

// body parser 
app.use(bodyParser.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(rootDir, 'public')));

// Routes
// only can reach with /admin/... paths
app.use('/admin', adminData.routes);

app.use(shopRoutes);

// page not found error
app.use((req, res, next) => {
    res.status(404).render('404', { 
        pageTitle: 'Page Not Found!',
        path: '',
    })
})

//listen for a port
app.listen(3000);
