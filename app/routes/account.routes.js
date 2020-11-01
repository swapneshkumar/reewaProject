module.exports = app => {
  const accountCtrl = require("../controllers/account.controller.js");

  // Create a new Customer
  app.post("/register", accountCtrl.create);

  app.post("/login",accountCtrl.login)

  // Retrieve all Customers

};
