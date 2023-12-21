import axios from "axios";

//Get All Tasks
export const getTasks = async () => {
  try {
    const response = await axios.get("http://localhost:5000/shamsad/task");
    return response.data.tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

//Update Tasks
export const DeleteTask = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/shamsad/task/${id}`
    );
    return response;
  } catch (error) {
    console.error("Error while deleting tasks:", error);
  }
};
