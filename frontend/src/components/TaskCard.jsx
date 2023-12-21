import React, { useState } from "react";
import "./Taskbar.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { getTasks, DeleteTask } from "./TaskAPI";

const TaskCard = ({ item }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);
  const [editedDescription, setEditedDescription] = useState(item.description);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:5000/shamsad/task/${id}`, {
        title: editedTitle,
        description: editedDescription,
      });
      getTasks();
      window.location.reload();
    } catch (error) {
      console.error("Error updating task:", error);
    }
    setEditing(false);
  };

  const handleDelete = async (id) => {
    DeleteTask(id).then((res) => {
      getTasks();
      window.location.reload();
    });
  };

  const handleCancel = () => {
    setEditedTitle(item.title);
    setEditedDescription(item.description);
    setEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave(item._id); // Assuming _id is the correct property for id
    }
  };

  return (
    <div className="border border-gray-500 rounded-md max-w-2xl h-48 p-2 shadow-[0_25px_40px_-15px_rgba(256,256,256,0.1)]">
      <div className="border-b border-gray-400 flex justify-between pb-2">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="text-sm overflow-x-auto scrollbar-none bg-transparent border border-gray-800"
          />
        ) : (
          <h2 className="text-md font-semibold overflow-x-auto scrollbar-none">
            {item.title}
          </h2>
        )}
        <div className="flex justify-evenly items-center gap-4">
          {isEditing ? (
            <>
              <button onClick={() => handleSave(item._id)} className="mx-2">
                Save
              </button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <div className="cursor-pointer" onClick={handleEditClick}>
              <ModeEditIcon />
            </div>
          )}
          <div
            className="cursor-pointer"
            onClick={() => handleDelete(item._id)}
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
      <p
        className={`h-28 text-sm overflow-auto scrollbar-none custom-scrollbar mt-2 ${
          isEditing ? "hidden" : "" // Hide description during editing
        }`}
      >
        {item.description}
      </p>
      {isEditing && (
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-28 text-sm overflow-auto scrollbar-none custom-scrollbar mt-2 w-full bg-transparent border border-gray-800"
        />
      )}
    </div>
  );
};

export default TaskCard;
