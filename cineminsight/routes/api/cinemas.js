const express = require("express");
const router = express.Router();
const cinemasCtrl = require("../../controllers/api/cinemas");

router.get("/", cinemasCtrl.index);
router.post("/", cinemasCtrl.create);
router.get("/:id", cinemasCtrl.show);
router.put("/:id", cinemasCtrl.update);
router.delete("/:id", cinemasCtrl.delete);

module.exports = router;
