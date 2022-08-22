var db = require("../database_mysql");

const addCommande = (req, res) => {
  var sql = "INSERT INTO Commandes SET ?";
  console.log(req.body);
  for (let i = 0; i < req.body.items.length; i++) {
    let params = {
      email: req.body.email,
      idProduct: req.body.items[i].id,
      dateAndTime: req.body.dateAndTime,
      quantity: req.body.items[i].quantity,
      unityPrice: req.body.items[i].price,
      totalPrice: req.body.items[i].itemTotal,
      streetName: req.body.streetName,
      houseNumber: req.body.houseNumber,
      postCode: req.body.postCode,
      city: req.body.city,
      userName: req.body.userName,
      phoneNumber: req.body.phoneNumber,
    };
    db.query(sql, params, (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result)console.log(`line commande  ${i} inserted`)
        
      
    });
  }
  res.status(201).send(`commande inserted`);
};

const selectAllCommandes = (req, res) => {
  var sql = "select * from Commandes";
  db.query(sql, (err, result) => {
    if (err) res.send(err);
    if (result) res.send(result);
  });
};

const selectCommandesByMailAndTime = (req,res) => {
  var sql = "SELECT email,count(idProduct) as number_of_product ,dateandtime FROM commandes GROUP BY dateandtime "
  db.query(sql,(err,result) => {
    if (err) res.send(err);
    if (result) res.send(result);
  })
}
module.exports = { addCommande, selectAllCommandes,selectCommandesByMailAndTime };
