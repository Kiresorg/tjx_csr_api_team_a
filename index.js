const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// set up Router
require("./routes/customers.routes")(app);
require("./routes/orders.routes")(app);
require("./routes/products.routes")(app);
