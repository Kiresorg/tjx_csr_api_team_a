const http = require('http');
const express = require('express');
const passport = require('passport');


const app = express();
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
require("./app/routers/order_products.route")(app);
require("./app/routers/products.route")(app);
require("./app/routers/auth.route")(app);


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