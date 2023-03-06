import React, { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <main className="bg-pink-100 min-h-screen pb-4">
      <div className="container mx-auto">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
