import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskBar from './components/TaskBar.jsx'
import TaskList from './components/TaskList.jsx';
import TaskInput from './components/TaskInput.jsx'
import Title from './components/Title.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
