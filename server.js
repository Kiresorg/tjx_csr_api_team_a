const app       = express();
const http      = require('http');
const express   = require('express');
var models      = require('./app/models');
var passport    = require('passport');
var session     = require('express-session');
var bodyParser  = require('body-parser');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

require("./app/routers/customers.route")(app);
require("./app/routers/orders.route")(app);

//Initialize BodyParser (to be used with password encryption)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Passport Initialization
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// Load passport strategies
require('./config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine')
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});

// default URL to API
app.use('/', function(req, res) {
    res.send('tjx_full_stack works :-)');
});

const db = require("./app/models");
db.sequelize.sync();

//const server = http.createServer(app);
const port = process.env.PORT || 3000;
app.listen(port,() =>{
  console.log(`listening on ` + port);
})

console.debug('Server listening on port ' + port);