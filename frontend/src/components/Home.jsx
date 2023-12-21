import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="border border-white text-white mx-12">
      {tasks.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </div>
  );
};

export default Home;
