import React from 'react';

export const TaskBanner = props => (
    <h4 className='bg-primary text-white text-center p-4'>
    Briareus App, developed by {props.userName} ({props.taskItems.filter(t => !t.done).length} tasks to do)
    </h4>
)