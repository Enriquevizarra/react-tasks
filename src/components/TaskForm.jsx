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
        className="text-2xl text-pink-600 mb-3 font-bold"
      >
        Create your Task
      </h1>
        <input
          placeholder="write your task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-pink-300 p-3 w-full mb-2 
          placeholder-pink-500 font-semibold rounded text-pink-700 border-2 border-rose-400 focus:border-rose-600 outline-0"
        />
        <textarea
          placeholder="write the description of the task"
          onChange={e => {
            setDescription(e.target.value)
          }}
          value={description}
          className="bg-pink-300 p-3 w-full mb-2
          placeholder-pink-500 font-semibold resize-none rounded text-pink-700 border-2 border-rose-400 focus:border-rose-600 outline-0"
        />

        <button
           className="bg-pink-300 rounded-md py-1 px-3 mt-4 text-pink-500 font-bold hover:bg-pink-600 hover:text-pink-200"
        >Save</button>
      </form>
    </div>
  );
}

export { TaskForm };
