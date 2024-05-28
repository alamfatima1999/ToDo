const express = require(`express`);
const router = express.Router();

const completedTasksController = require("../controllers/completedTasksController");


router.get("/", completedTasksController.getCompletedTasks);

module.exports = router;