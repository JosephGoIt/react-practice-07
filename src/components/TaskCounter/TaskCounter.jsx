import React from 'react';
import css from './TaskCounter.module.css';
//import the hook
import { useSelector } from 'react-redux';
import { getActiveTaskCount, getCompletedTaskCount } from '../../redux/selectors';

export const TaskCounter = () => {
    // get an array of tasks from redux state
    // const tasks = useSelector(state => state.tasks);

    //based on redux state, get derived data
    // const count = tasks.reduce(
    //     (acc, task) => {
    //         if (task.completed) {
    //             acc.completed += 1;
    //         } else {
    //             acc.active += 1;
    //         }
    //         return acc;
    //     },
    //     { active: 0, completed: 0}
    // );

    const activeCount = useSelector(getActiveTaskCount);
    const completedCount = useSelector(getCompletedTaskCount);

    return(
        <div>
            <p className={css.text}>Active: {activeCount}</p>
            <p className={css.text}>Completed: {completedCount}</p>
        </div>
    );
};