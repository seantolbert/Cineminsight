const express = require("express");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
const router = express.Router();
const insightsCtrl = require("../../controllers/api/insights");

router.get("/", insightsCtrl.index);
router.post("/", insightsCtrl.create);
router.get("/:insightId", insightsCtrl.show);
router.put("/:insightId", insightsCtrl.update);
router.delete("/:insightId", insightsCtrl.delete);

module.exports = router;
