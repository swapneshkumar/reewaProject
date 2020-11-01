const { verify } = require('jsonwebtoken');
const { verifyToken } = require('../_helper/_tokenHelper');
const _jwtHelper=require('../_helper/_tokenHelper');
module.exports = app => {
    const productCTRL = require("../controllers/product.controller");
  
    app.post("/product/create",_jwtHelper.verifyToken, productCTRL.create);

    app.get("/product/getAllProducts",_jwtHelper.verifyToken,productCTRL.findAll)

    app.get("/product/getProductById/:id",_jwtHelper.verifyToken,productCTRL.findById)

    app.put("/product/update/:id",_jwtHelper.verifyToken,productCTRL.update)

    app.delete("/product/delete/:id",_jwtHelper.verifyToken,productCTRL.delete)
  
  
  };