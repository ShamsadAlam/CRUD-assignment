const express = require("express");
const router = express.Router();
const {
  AllTasks,
  CreateTask,
  UpdateTask,
  DeleteTask,
} = require("../controller/TaskController");

router.route("/").get(AllTasks).post(CreateTask);

router.route("/:id").put(UpdateTask).delete(DeleteTask);

module.exports = router;
