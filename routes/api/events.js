const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/api/events")

router.get("/", eventsCtrl.index)
router.post("/new", eventsCtrl.create)
router.get("/:id", eventsCtrl.show)

module.exports = router;