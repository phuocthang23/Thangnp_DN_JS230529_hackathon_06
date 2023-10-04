const controllers = require("../controllers/funtionTask");
const express = require("express");
const router = express.Router();

router.route("/").post(controllers.createQuest);
router.route("/").get(controllers.getAllCategories);
router.route("/:id").get(controllers.getOneCategories);
// router.route("/:id").put(controllers.updateTask);
// router.route("/:id").delete(controllers.deleteTask);

module.exports = router;
