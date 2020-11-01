const sql = require("./db.js");

// constructor
const AccountModel = function(customer) {
  this.username = customer.username;
  this.password = customer.password;
  this.firstName = customer.firstName;
  this.lastName = customer.lastName;
};

AccountModel.create = (newCustomer, result) => {
  sql.query("INSERT INTO accounts SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

AccountModel.login=(user,result)=>{
  sql.query(`select  * from accounts where UserName=? and Password=?  limit 1;`,[user.username,user.password],(err,res)=>{
    if(err){
      console.log("error",err);
      result(err,null);
      return;
    }
    result(null,{'userName':res[0].UserName})
  })
}


module.exports = AccountModel;
