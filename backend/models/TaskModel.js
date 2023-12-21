const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
