import BarraTarefas from './components/BarraTarefas';
import CampoTarefas from './components/CampoTarefas';
import Escopo from './components/Escopo';
import ListaTarefas from './components/Tarefas';
import { useState, useEffect } from 'react';

function App() {
  const [tarefas, setTarefas] = useState(() => {

    const tarefasSalvas = localStorage.getItem('tarefas');
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <div className="min-h-screen bg-gray-100 mb-full ml-0 lg:ml-80">
      <Escopo />
      <BarraTarefas tarefas={tarefas} setTarefas={setTarefas} />
      <CampoTarefas tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefas tarefas={tarefas} setTarefas={setTarefas} />
    </div>
  );
}

export default App;
