const router = require("express").Router();
const controllers = require("../controllers/controllerCommandes");

router.post('/addCommande',controllers.addCommande)
router.get('/getAllcommandes',controllers.selectAllCommandes)
router.get('/getCommandesGroupBy', controllers.selectCommandesByMailAndTime)

module.exports = router ;   