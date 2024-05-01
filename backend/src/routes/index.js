const { Router } = require("express");
const router = Router();

router.use("/login", require("./login.js"));
router.use("/buy", require("./buy.js"));
router.use("/register", require("./register.js"));
router.use("/sell", require("./sell.js"));
router.use("/stocks", require("./stocks.js"));
router.use("/addStock", require("./addStock.js"));
router.use("/myStocks", require("./myStocks.js"));
router.use("/stockInfo", require("./stockInfo.js"));
router.use("/walletAmount", require("./walletAmount.js"));
router.use("/myStockInfo", require("./myStockInfo.js"));
router.use("/updateWallet", require("./updateWallet.js"));
router.use("/imagestocks", require("./imagestocks.js"));

module.exports = router;
