const express = require('express');
const router = express.Router();

const activeTasksController = require("../controllers/activeTasksController");

router.get("/", activeTasksController.getActiveTasks);

module.exports = router;