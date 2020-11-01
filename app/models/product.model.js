const sql = require("./db.js");

// constructor
const ProductModel = function(product) {
  this.productName = product.productName;
  this.productDesc = product.productDesc;
  this.price = product.price;
};

ProductModel.create = (newProduct, result) => {
  sql.query("INSERT INTO product SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new product: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

ProductModel.findAll=(result)=>{
  sql.query(`select  * from product`,(err,res)=>{
    if(err){
      console.log("error",err);
      result(err,null);
      return;
    }
    result(null,res)
  })
}

ProductModel.findById=(id,result)=>{
    sql.query(`select  * from product where id=?`,id,(err,res)=>{
        if(err){
          console.log("error",err);
          result(err,null);
          return;
        }
        result(null,res)
      })
}

ProductModel.delete=(id,result)=>{
    sql.query(`delete  from product where id=?`,id,(err,res)=>{
        if(err){
          console.log("error",err);
          result(err,null);
          return;
        }
        result(null,res)
      })
}

ProductModel.update=(product,id,result)=>{

    sql.query(`update product set productName=?,price=?,productDesc=? where id=?`,[product.productName,product.price,product.productDesc,id],(err,res)=>{
        if(err){
          console.log("error",err);
          result(err,null);
          return;
        }
        result(null,res)
      })
}


module.exports = ProductModel;
