const controllers = require("../controllers/questController");
const express = require("express");
const router = express.Router();

router.route("/").post(controllers.createQuest);
router.route("/").get(controllers.getAllQuest);
router.route("/:id").get(controllers.getOneQuest);
router.route("/:id/answers").get(controllers.getOneQuestAndALLAnswer);
router.route("/filter").get(controllers.getOneQuestAndALLAnswerLimit);
// router.route("/:id").delete(controllers.deleteTask);

module.exports = router;
