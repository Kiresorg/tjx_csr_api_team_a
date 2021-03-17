 // Configuration for REMOTE database
module.exports = {
    HOST: "csr-db-team-a.mysql.database.azure.com",
    USER: "teamaadmin@csr-db-team-a",
    PASSWORD: "engcohort2021",
    DB: "ordersdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };