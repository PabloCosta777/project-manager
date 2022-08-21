const router = require("express").Router();
const def = require("../helpers/defaultResponse");

router.get("/auth", def);
router.post("/register", def);
router.delete("/delete/:id", def);

module.exports = router;
