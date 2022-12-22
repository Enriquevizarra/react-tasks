import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-green-800 text-white p-4 rounded-xl">
      <h1
        className="text-xl font-bold capitalize"
      >{task.title}</h1>
      <p
        className="text-green-200"
      >{task.description}</p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
        className="bg-teal-400 rounded-md py-1 px-2 mt-4 text-teal-900 font-bold hover:bg-teal-500"
      >
        delete task
      </button>
    </div>
  );
}

export { TaskCard };
