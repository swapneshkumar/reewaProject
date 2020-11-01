const ProductModel = require("../models/product.model");
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
    const product = new ProductModel({
        productName: req.body.productName,
        productDesc: req.body.productDesc,
        price: req.body.price,
    });

    // Save Customer in the database
    ProductModel.create(product, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    ProductModel.findAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id .`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " 
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.findById=(req,res)=>{
    const id=req.params.id;
    console.log(id)
    ProductModel.findById(id,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id .`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " 
                });
            }
        } else {
            res.send(data);
        }
    });

}

exports.delete=(req,res)=>{
    const id=req.params.id;
    console.log(id)
    ProductModel.delete(id,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id .`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " 
                });
            }
        } else {
            res.send(data);
        }
    });

}


exports.update=(req,res)=>{
    const id=req.params.id;
    const product = new ProductModel({
        productName: req.body.productName,
        productDesc: req.body.productDesc,
        price: req.body.price,
    });

    ProductModel.update(product,id,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id .`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " 
                });
            }
        } else {
            res.send(data);
        }
    });

}

