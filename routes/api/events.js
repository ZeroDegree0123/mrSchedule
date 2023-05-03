const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/api/events")
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", eventsCtrl.index)

router.post("/new", ensureLoggedIn, eventsCtrl.create)

router.post("/:id", ensureLoggedIn, eventsCtrl.update)

router.delete("/:id", ensureLoggedIn, eventsCtrl.remove)

router.get("/:id", eventsCtrl.show)


module.exports = router;