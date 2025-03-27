const ListaTarefas = ({ tarefas, setTarefas }) => {
  const concluirTarefa = (id) => {
    const atualizadas = tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, completed: true } : tarefa
    );
    setTarefas(atualizadas);
  };

  const excluirTarefa = (id) => {
    const filtradas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(filtradas);
  };

  return (
    <div className="mt-8 px-4">
      {tarefas.filter(tarefa => !tarefa.completed).map((tarefa) => (
          <div key={tarefa.id} className="bg-white rounded-xl p-4 mb-4 w-full max-w-md mx-auto flex justify-between items-center">
            <span className="text-black">{tarefa.text}</span>
            <div className="flex gap-3">
              <button onClick={() => concluirTarefa(tarefa.id)} className="text-green-600 hover:underline">
                Concluir
              </button>
              <button onClick={() => excluirTarefa(tarefa.id)} className="text-red-600 hover:underline">
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListaTarefas;
