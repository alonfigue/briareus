//import logo from './logo.svg';
//import './App.css';
import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/TaksRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { VisibilityControl } from './components/VisibilityControl';
function App() {


  const [userName, setUserName] = useState('Alonso Figueroa');
  const [taskItems, setTaskItems] = useState([
    { name: 'Biology', done: false },
    { name: 'Clean my room', done: false },
    { name: 'Feed the dog', done: true },
    { name: 'Run 2 miles', done: false }
  ]);

  const [showCompleted, setShowCompleted] = useState(true)


  //useEffect es el equivalente a component didMount
  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName('Alonso Figueroa M')
      setTaskItems([
        { name: 'Biology', done: false },
        { name: 'Clean my room', done: false },
        { name: 'Feed the dog', done: true },
        { name: 'Run 2 miles', done: false }
      ])
      setShowCompleted(true);
    }

  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name == task.name ? { ...t, done: !t.done } : t)))


  const taskTableRows = (doneValue) => (
    taskItems
    .filter(task => task.done == doneValue)
    .map(task => (
      <TaskRow task={task} key={task.name} toggleTrakie={toggleTask}></TaskRow>
    ))
  )




  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator hello={createNewTask} />
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>{taskTableRows(false)}</tbody>
      </table>

      <div className='bg-secondary-text-white text-center p-2'>
      <VisibilityControl description = " Check to cover the tasks that were done"
        isChecked={showCompleted}
        hello={checked => setShowCompleted(checked)}
      />
      </div>

      {
        showCompleted &&(
          <table className='table table-scripted table-bordered'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(true)}
          </tbody>
          </table>
        )
      }

    </div>
  );
}

export default App;
