import {  useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description)
    console.log(title, description)
    setTitle("")
    setDescription("")
  };


  return (
    <div className="max-w-md mx-auto ">
      <form 
        onSubmit={handleSubmit}
        className="p-10"
        >
      <h1
        className="text-2xl to-black mb-3 font-bold"
      >
        Create your Task
      </h1>
        <input
          placeholder="write your task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="write the description of the task"
          onChange={e => {
            setDescription(e.target.value)
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button
           className="bg-green-700 rounded-md py-1 px-3 mt-4 text-teal-900 font-bold hover:bg-white"
        >Save</button>
      </form>
    </div>
  );
}

export { TaskForm };
