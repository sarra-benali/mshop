const router = require("express").Router();
const controllers = require("../controllers/controllerProducts");

router.post('/addProduct',controllers.addProduct)
router.get('/getAllProducts',controllers.selectAllProducts)

module.exports = router ;   