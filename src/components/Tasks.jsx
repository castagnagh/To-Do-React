import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props){
    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((tasks)=> (
                <li key={tasks.id} className="flex gap-2">
                    <button 
                        onClick={()=>props.onTaskClick(tasks.id)} 
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
                            tasks.isCompleted && 'line-through'
                        }`}
                    >
                        {tasks.title}
                    </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={()=>props.onDeleteTaskClick(tasks.id)} className="bg-slate-400 p-2 rounded-md text-white">
                        <TrashIcon />
                    </button>                    
                </li>
            ))}
        </ul>
    );
}

export default Tasks