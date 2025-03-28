import { useState } from "react";

const CampoTarefas = ({ tarefas, setTarefas }) => {
  const [entrada, setEntrada] = useState("");

  const adicionarTarefa = () => {
    if (entrada.trim() === "") return;

    const novaTarefa = {
      id: tarefas.length + 1,
      text: entrada,
      completed: false
    };

    setTarefas([...tarefas, novaTarefa]);
    setEntrada("");
  };
  

  return (
    <div className="flex items-center justify-center mt-10">
      <input
        type="text"
        placeholder="Digite sua tarefa"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        className="w-80 h-10 px-3 rounded border border-gray-300"
      />
      <button
        onClick={adicionarTarefa}
        className="ml-2 px-5 py-2 h-10 rounded-lg text-white bg-blue-600 hover:bg-blue-700 "
      >
        Adicionar
      </button>
    </div>
  );
};

export default CampoTarefas;
