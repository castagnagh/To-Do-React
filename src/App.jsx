import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";


function App(){
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId){
    const newTasks = tasks.map(tasks => {
      if(tasks.id == taskId){
        return{...tasks, isCompleted: !tasks.isCompleted};
      }

      return tasks;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((tasks) => tasks.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTasks
          onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App;