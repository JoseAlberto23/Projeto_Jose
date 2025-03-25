const TaskList = ({ tasks, setTasks }) => {
    const handleComplete = (id) => {
      const tarefasConcluidas = tasks.map(task =>
        task.id === id ? { ...task, completed: true } : task
      );
      setTasks(tarefasConcluidas);
    };
  
    const handleDelete = (id) => {
      const tarefasExcluidas = tasks.filter(task => task.id !== id);
      setTasks(tarefasExcluidas);
    };
  
    return (
      <div className="mt-8 px-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between bg-white p-4 mb-2 rounded shadow">
            <span className={task.completed ? "line-through text-gray-500" : "text-black"}>{task.text}</span>
            <div className="flex gap-3">
              {!task.completed && (
                <button onClick={() => handleComplete(task.id)} className="text-green-600 hover:underline">
                  Concluir
                </button>
              )}
              <button onClick={() => handleDelete(task.id)} className="text-red-600 hover:underline">
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default TaskList;