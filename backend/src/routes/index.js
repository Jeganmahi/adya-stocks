const { Router } = require("express");
const router = Router();

router.use("/login", require("./login.js"));
router.use("/buy", require("./buy.js"));
router.use("/register", require("./register.js"));
router.use("/sell", require("./sell.js"));
router.use("/stocks", require("./stocks.js"));
router.use("/addStock", require("./addStock"));

module.exports = router;
