import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";


function App(){
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  },
  {
    id: 2,
    title: "Ler um livro",
    description: "Ler um livro sobre desenvolvimento web.",
    isCompleted: false
  },
  {
    id: 3,
    title: "Fazer exercícios",
    description: "Fazer exercícios para manter a saúde em dia.",
    isCompleted: false
  }]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks}/>
        <AddTasks/>
      </div>
    </div>
  );
}

export default App;