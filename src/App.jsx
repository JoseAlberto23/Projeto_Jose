import BarraTarefas from './components/BarraTarefas';
import CampoTarefas from './components/CampoTarefas';
import Escopo from './components/Escopo';
import ListaTarefas from './components/Tarefas';
import { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <div className="ml-80 min-h-screen bg-gray-100 mb-12">
      <Escopo />
      <BarraTarefas tarefas={tarefas} setTarefas={setTarefas}/>
      <CampoTarefas tarefas={tarefas} setTarefas={setTarefas} />
      <ListaTarefas tarefas={tarefas} setTarefas={setTarefas} />
    </div>
  );
}

export default App;
