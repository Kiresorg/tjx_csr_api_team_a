module.exports = app => {
    const passport = require('passport');

    var router = require("express").Router();

    // create new customer
    router.post("/", function(req, res) {
        //res.send("hey");
        passport.authenticate('local', { successRedirect: '/main.html', failureRedirect: 'viewProducts.html'})
    });
        

    
    app.use('/login', router);
};

// passport.authenticate('local', { successRedirect: '/main.html', failureRedirect: '/viewProducts.html' }));