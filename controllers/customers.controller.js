exports.getAllCustomers = (req, res) => {
    res.send("Hit customers.controller: getAllCustomers()");
}

exports.createNewCustomer = (req, res) => {
    res.send("Hit customers.controller: createNewCustomer()");
}

exports.getCustomer = (req, res) => {
    res.send("Hit customers.controller: getCustomer()");
}

exports.modifyCustomer = (req, res) => {
    res.send("Hit customers.controller: modifyCustomer()");
}

exports.deleteCustomer = (req, res) => {
    res.send("Hit customers.controller: deleteCustomer()");
}