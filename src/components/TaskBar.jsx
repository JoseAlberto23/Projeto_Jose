const TaskBar = ({ tasks }) => {
  const pendentes = tasks.filter(task => !task.completed);
  const concluidas = tasks.filter(task => task.completed);

  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-gray-800 text-white font-bold p-5">
      <h1 className="text-3xl text-center mb-32">Minhas tarefas</h1>

      <div className="mb-8">
        <h2 className="text-xl mb-2">Tarefas a fazer</h2>
        <ul className="list-disc ml-5 space-y-1">
          {pendentes.map(task => <li key={task.id}>{task.text}</li>)}
        </ul>
      </div>

      <div className="mt-[350px]">
        <h2 className="text-xl mb-2">Tarefas concluídas</h2>
        <ul className="list-disc ml-5 space-y-1 ">
          {concluidas.map(task => <li key={task.id}>{task.text}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default TaskBar;