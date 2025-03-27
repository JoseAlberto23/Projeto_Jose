import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskBar from './components/BarraTarefas.jsx'
import TaskList from './components/Tarefas.jsx';
import TaskInput from './components/CampoTarefas.jsx'
import Title from './components/Escopo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
