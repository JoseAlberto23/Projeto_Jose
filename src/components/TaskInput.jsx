import { useState } from "react";

const TaskInput = ({ tasks, setTasks }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim() === "") return;

    const novaTarefa = {
      id: tasks.length + 1,
      text: inputValue,
      completed: false
    };

    setTasks([...tasks, novaTarefa]);
    setInputValue("");
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <input
        type="text"
        placeholder="Digite sua tarefa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-80 h-10 px-3 rounded border border-gray-300"
      />
      <button
        onClick={handleClick}
        className="ml-2 px-5 py-2 h-10 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
      >
        Adicionar
      </button>
    </div>
  );
};

export default TaskInput;
