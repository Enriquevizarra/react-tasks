import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-pink-300 text-pink-600 p-4 rounded-xl flex flex-col  flex-wrap relative">
      <h1
        className="text-xl font-bold capitalize text-center"
      >{task.title}</h1>
      <p
        className="text-pink-500 font-bold capitalize mb-8"
      >{task.description}</p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
        className="bg-rose-400 rounded-md py-1 px-2 mt-4 text-rose-100 font-bold hover:bg-rose-500 hover:text-rose-200 absolute bottom-0 mb-2"
      >
        delete task
      </button>
    </div>
  );
}

export { TaskCard };
