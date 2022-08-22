var db = require ("../database_mysql");
const bcrypt = require("bcryptjs");

const signUp = function (req,res){
    var sql = "SELECT * FROM users WHERE LOWER(email) = LOWER(?)";
    console.log(req.body);
    db.query(sql, [req.body.email], (err, result) => {
        if (err) {
            console.log("ok");
            res.status(500).send(err);
        } else {
            if (result.length) {
                res.status(200).send("this user is already in use!");
            } else {
            const salt = bcrypt.genSaltSync();
                const hash = bcrypt.hashSync(req.body.userPassword, salt);
                console.log(hash);
                var params = {
                    username: req.body.username,
                    
                    email: req.body.email,
                    userPassword: hash,
                    adresse: req.body.adresse,
                    phoneNumber: req.body.phoneNumber,
                    accountCreateDate: req.body.accountCreateDate
                };
                console.log(params);
                db.query(`INSERT INTO users Set ?`, params, (err,result) => {
                    if (err){
                        throw err;
                    } else {
                        res.status(201).send("The user has been registered with us !")
                    }
                });
            };
        }
    });
};
const signIn = (req, res) => {
    sql = "SELECT * FROM Users WHERE email =?";
    db.query(sql, [req.body.email], (err, result) => {
        // user does not exists
        if (err) {
            res.send(['errSQL', err]);
        } else {
            if (!result.length) {
                res.send(["Email is incorrect!"]);
            } else {
                bcrypt.compare(
                    req.body.userPassword,
                    result[0]["userPassword"],
                    (bErr, bResult) => {
                        // wrong password
                        if (bResult) {
                            res.send(['connected', result[0], bResult]);
                        } else {
                            res.send(["Password is incorrect!", bErr]);
                        }
                    }
                );
            }
        }
    });
};



module.exports = {signUp,signIn}
        