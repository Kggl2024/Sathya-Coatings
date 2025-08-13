const express = require("express");
const router = express.Router();
const SiteInchargeController = require("../controllers/SiteInchargeController");

router.post("/completion-status", SiteInchargeController.saveCompletionStatus);

module.exports = router;