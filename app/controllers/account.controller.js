const AccountModel = require("../models/account.model.js");
const _jwtHelper = require('../_helper/_tokenHelper');

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const accounts = new AccountModel({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  // Save Customer in the database
  AccountModel.create(accounts, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};


// Find a single Customer with a customerId
exports.login = (req, res) => {
  const accounts = new AccountModel({
    username: req.body.username,
    password: req.body.password,
  });
  AccountModel.login(accounts, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${accounts.username}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + accounts.username
        });
      }
    } else {
      var token = _jwtHelper.generateJWTToken(data);
      var jtoken={
        'token':token,
      }
      res.send(jtoken);
    }
  });
};

