var db = require ("../database_mysql");

const addProduct = (req,res) => {
    var sql = "INSERT INTO products SET ?";
    
    db.query(sql,req.body,(err,result)=>{
        if (err) {
            throw err;
        } else {
            res.status(201).send("product inserted")
        }
        
    });
};

const selectAllProducts=(req,res)=>{
    var sql="select * from products"
    db.query(sql,(err,result)=>{
        if(err)res.send(err)
        if(result)res.send(result)
    })
}

module.exports = {addProduct,selectAllProducts}