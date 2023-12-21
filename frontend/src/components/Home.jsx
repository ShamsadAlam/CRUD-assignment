import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getTasks, createTask } from "./TaskAPI";
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const TasksGet = () => {
    getTasks().then((res) => {
      setTasks(res);
    });
  };

  const TaskCreate = async () => {
    try {
      await axios.post("http://localhost:4000/shamsad/task", newTask);
      getTasks();
      window.location.reload();
      setShowCreateForm(false);
      setNewTask({ title: "", description: "" });
    } catch (error) {
      console.error("Error creating tasks:", error);
    }
  };

  useEffect(() => {
    TasksGet();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="mx-12">
      <div className="text-right pr-10 mt-8 p-2">
        {showCreateForm ? (
          <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
        ) : null}
        {showCreateForm ? (
          <div className="fixed inset-1/4 bg-black text-white border border-gray-200 rounded-md p-4 z-50 shadow-[0_25px_40px_-15px_rgba(256,256,256,0.1)] bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg ">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
              className="bg-transparent border border-gray-300 p-2 mb-2 w-full rounded-md text-md font-semibold"
            />
            <textarea
              placeholder="Description"
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
              className="bg-transparent border border-gray-300 p-2 mb-2 w-full rounded-md text-sm"
            />
            <div className="flex justify-end">
              <button
                onClick={TaskCreate}
                className="border border-gray-300 p-2 mr-2 rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-white border border-gray-300 p-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
        <span
          className="border border-white bg-white py-2 px-4 rounded-md font-semibold hover:border-white hover:text-white hover:bg-transparent cursor-pointer"
          onClick={() => setShowCreateForm(true)}
        >
          Create
        </span>
      </div>
      <div className="text-white my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {tasks.map((item) => (
          <TaskCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
