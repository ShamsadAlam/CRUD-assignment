import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/shamsad/task");
      console.log("response: ", response.data.tasks);
      setTasks(response.data.tasks);
      console.log("tasks: ", tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="text-white m-12 grid grid-cols-2 sm:grid-cols-3 md:gird-cols-4 lg:grid-cols-5 gap-8">
      {tasks.map((item) => (
        <TaskCard item={item} />
      ))}
    </div>
  );
};

export default Home;
