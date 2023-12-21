import axios from "axios";
import { BASE_URL } from "./config";

//Get All Tasks
export const getTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/shamsad/task`);
    return response.data.tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

//Update Tasks
export const DeleteTask = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/shamsad/task/${id}`);
    return response;
  } catch (error) {
    console.error("Error while deleting tasks:", error);
  }
};
