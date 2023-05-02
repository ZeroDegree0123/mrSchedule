const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/api/events")

router.get("/", eventsCtrl.index)

router.post("/new", eventsCtrl.create)

router.post("/:id", eventsCtrl.update)

router.delete("/:id", eventsCtrl.remove)

router.get("/:id", eventsCtrl.show)


module.exports = router;