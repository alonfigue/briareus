import React, {useState} from 'react';

export const TaskCreator = props => {

    const [newTaskName, setnewTaskName] = useState('');

    //e: event
    const updateNewTaskValue = e => setnewTaskName(e.target.value);

    const createNewTask = () => {
        props.hello(newTaskName);
        //console.log(newTaskName);
        setnewTaskName('');

    }

    return (
        <div className='my-1'>
            <input
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
            />
            <button className='btn btn-primary mt-1' onClick={createNewTask} >Add Task</button>
        </div>
    )
}