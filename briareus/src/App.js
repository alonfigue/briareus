//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import { TaskRow } from './components/TaksRow';


function App() {


  const [username, setUserName] = useState('agfm');
  const [taskItems, setTaskItems] = useState([
    { name: 'Task one', done: false },
    { name: 'Task two', done: false },
    { name: 'Task three', done: true },
    { name: 'Task four', done: false }
  ])


  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name == task.name ? { ...t, done: !t.done } : t)))


  const taskTableRows = () => (
    taskItems.map(task => (
      <TaskRow task={task} key={task.name} toggleTrakie={toggleTask}></TaskRow>
    ))
  )




  return (
    <div>
      <h1>Briareus</h1>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
