const BarraTarefas = ({ tarefas, setTarefas }) => {
  const pendentes = tarefas.filter(tarefa => !tarefa.completed);
  const concluidas = tarefas.filter(tarefa => tarefa.completed);

  const excluirTarefaConcluidas = (id) => {
    const atualizadas = tarefas.filter(tarefa => tarefa.id !== id);

    setTarefas(atualizadas);
  };

  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-gray-800 text-white font-bold p-5">
      <h1 className="text-3xl text-center mb-32">Minhas tarefas</h1>

      <div className="mb-8 absolute top-40">
        <h2 className="text-xl mb-2">Tarefas a fazer</h2>
        <ul className=" ml-5 space-y-1">
          {pendentes.map(tarefa => (
            <li className="text-white" key={tarefa.id}>
              {tarefa.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[470px]">
        <h2 className="text-xl">Tarefas concluídas</h2>
        <ul className="ml-5 space-y-1">
          {concluidas.map(tarefa => (
            <li className="text-green-400 flex justify-between items-center" key={tarefa.id}>
              {tarefa.text}
              <button
                onClick={() => excluirTarefaConcluidas(tarefa.id)}
                className="ml-2 text-red-300 hover:underline"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BarraTarefas;
