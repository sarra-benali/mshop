const router = require("express").Router();
const controllers = require("../controllers/controllerUser");

router.post("/signUp",controllers.signUp);
router.post("/signIn", controllers.signIn);
module.exports = router ;   