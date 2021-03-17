const app       = express();
const http      = require('http');
const express   = require('express');
const db        = require("./app/models");
var passport    = require('passport');
var session     = require('express-session');
var bodyParser  = require('body-parser');

require("./app/routers/customers.route")(app);
require("./app/routers/orders.route")(app);

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//Initialize BodyParser (to be used with password encryption)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Passport Initialization
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// Load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// default URL to API
app.use('/', function(req, res) {
    res.send('tjx_full_stack works :-)');
});

//Syncing database on server start
db.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine')
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});

//const server = http.createServer(app);
const port = process.env.PORT || 3000;
app.listen(port,() =>{
  console.log(`listening on ` + port);
})

console.debug('Server listening on port ' + port);