import './App.css';
import TaskBar from './components/TaskBar';
import TaskInput from './components/TaskInput';
import Title from './components/Title';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="ml-80 min-h-screen bg-gray-100">
      <Title />
      <TaskBar tasks={tasks}/>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;