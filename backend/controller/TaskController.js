const Tasks = require("../models/TaskModel");

//Create Tasks
exports.CreateTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Tasks.create({ title, description });
  res.status(200).json({
    success: true,
    task,
  });
};

//Get All Tasks
exports.AllTasks = async (req, res) => {
  const tasks = await Tasks.find();
  res.status(200).json({
    success: true,
    tasks,
  });
};

// Update Task
exports.UpdateTask = async (req, res) => {
  let task = await Tasks.findById(req.params.id);
  if (!task)
    return res.json({
      success: false,
      message: "task not found",
    });
  task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    task,
  });
};

//Delete Task
exports.DeleteTask = async (req, res) => {
  const task = await Tasks.findById(req.params.id);
  if (!task)
    return res.json({
      success: false,
      message: "task not found",
    });
  await Tasks.deleteOne();
  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
  });
};
